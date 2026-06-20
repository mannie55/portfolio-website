"use client";

import { useState, useRef } from "react";
import { FAQItem } from "@/types/faq";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LottieChevron } from "../ui/lottie-chevron";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface FAQRowProps {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQRow({ item, isOpen, onToggle }: FAQRowProps) {
  const answerRef = useRef<HTMLParagraphElement>(null);

  useGSAP(
    () => {
      if (isOpen) {
        gsap.fromTo(
          answerRef.current,
          { opacity: 0, y: -15 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
        );
      }
    },
    { dependencies: [isOpen] }
  );

  return (
    <div className="faq-card flex flex-col overflow-hidden rounded-[1.25rem] bg-surface">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 p-6 text-left md:px-8"
      >
        <span className="text-body md:text-body-lg font-medium text-white">
          {item.question}
        </span>
        
        <LottieChevron isOpen={isOpen} />
      </button>

      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="border-t border-border-lighter p-6 pt-0 md:px-8">
            <p
              ref={answerRef}
              className="mt-4 text-body-sm leading-relaxed text-muted md:text-body"
            >
              {item.answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

import { SectionHeading } from "@/components/ui/section-heading";
import { AButtonSecondary } from "@/components/ui/button-secondary";
import { faqData } from "@/lib/mock/faq";

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  useGSAP(
    () => {
      const cards = gsap.utils.toArray<HTMLElement>(".faq-card");

      cards.forEach((card, index) => {
        gsap.fromTo(
          card,
          { scale: 0.8, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              once: true,
              onEnter: () => {
                if (index === 0) {
                  // Slight delay to allow the card entry animation to establish
                  setTimeout(() => {
                    setOpenId(faqData[0].id);
                  }, 300);
                }
              },
            },
          }
        );
      });
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} className="py-24">
      <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
        {/* Left Side: Heading and CTA */}
        <div className="flex flex-col items-start gap-8 lg:sticky lg:top-24 lg:max-w-[25rem]">
          <SectionHeading
            title="EVERYTHING YOU NEED TO KNOW."
            description="Got questions? I've got answers. If you don't find what you're looking for, feel free to reach out."
          />
          <AButtonSecondary label="Send me a message" />
        </div>

        {/* Right Side: FAQ Accordion */}
        <div className="flex flex-1 flex-col gap-4 lg:max-w-[50rem]">
          {faqData.map((item) => (
            <FAQRow
              key={item.id}
              item={item}
              isOpen={openId === item.id}
              onToggle={() => toggleItem(item.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
