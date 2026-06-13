"use client";

import { useActionState } from "react";

import {
  submitContactForm,
  type ContactFormState,
} from "@/app/contact/actions";
import { Button } from "@/components/ui/button";

const initialState: ContactFormState = {
  success: false,
  message: "",
};

const inputClassName =
  "mt-1.5 w-full rounded-md border border-border bg-surface px-3 py-2 text-body-sm text-foreground outline-none focus:border-accent focus:ring-1 focus:ring-accent";

export function ContactForm() {
  const [state, formAction, pending] = useActionState(
    submitContactForm,
    initialState,
  );

  return (
    <form
      action={formAction}
      className="space-y-5 rounded-[20px] bg-surface-elevated p-6 sm:p-8"
    >
      <div>
        <label htmlFor="name" className="block text-body-sm font-medium">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className={inputClassName}
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-body-sm font-medium">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className={inputClassName}
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-body-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={inputClassName}
        />
      </div>
      {state.message ? (
        <p
          role="status"
          className={
            state.success
              ? "text-body-sm text-success"
              : "text-body-sm text-error"
          }
        >
          {state.message}
        </p>
      ) : null}
      <Button type="submit" disabled={pending}>
        {pending ? "Sending..." : "Send message"}
      </Button>
    </form>
  );
}
