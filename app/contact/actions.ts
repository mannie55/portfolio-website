"use server";

import { Resend } from "resend";

import { email as defaultContactEmail } from "@/lib/constants";

export type ContactFormState = {
  success: boolean;
  message: string;
};

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const name = String(formData.get("name") ?? "").trim();
  const senderEmail = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || !senderEmail || !message) {
    return {
      success: false,
      message: "Please fill in all fields.",
    };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(senderEmail)) {
    return {
      success: false,
      message: "Please enter a valid email address.",
    };
  }

  const contactEmail = process.env.CONTACT_EMAIL ?? defaultContactEmail;

  if (!resend) {
    console.log("Contact form submission (Resend not configured):", {
      name,
      email: senderEmail,
      message,
    });
    return {
      success: true,
      message:
        "Message received! (Email delivery is not configured yet — check server logs in development.)",
    };
  }

  const { error } = await resend.emails.send({
    from: "Portfolio Contact <onboarding@resend.dev>",
    to: contactEmail,
    replyTo: senderEmail,
    subject: `Portfolio inquiry from ${name}`,
    text: `Name: ${name}\nEmail: ${senderEmail}\n\n${message}`,
  });

  if (error) {
    return {
      success: false,
      message: "Something went wrong sending your message. Please try again.",
    };
  }

  return {
    success: true,
    message: "Thanks for reaching out! I'll get back to you soon.",
  };
}
