"use client";

import { useState } from "react";
import { FAQItem } from "@/types/faq";

interface FAQRowProps {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}

import { LottieChevron } from "./lottie-chevron";

function FAQRow({ item, isOpen, onToggle }: FAQRowProps) {
  return (
    <div className="flex flex-col overflow-hidden rounded-[1.25rem] bg-surface transition-all duration-300">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-surface-elevated md:px-8"
      >
        <span className="text-body font-medium text-white md:text-body-lg">
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
            <p className="mt-4 text-body-sm leading-relaxed text-muted md:text-body">
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
  const [openId, setOpenId] = useState<string | null>(faqData[0].id);

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-24">
      <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
        {/* Left Side: Heading and CTA */}
        <div className="flex flex-col items-start gap-8 lg:sticky lg:top-24 lg:max-w-[25rem]">
          <SectionHeading
            title="EVERYTHING YOU NEED TO KNOW."
            description="Got questions? I've got answers. If you don't find what you're looking for, feel free to reach out."
          />
          <AButtonSecondary label="Book a strategy call" />
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
