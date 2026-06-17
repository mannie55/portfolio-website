import { defineField, defineType } from "sanity";

export const caseStudy = defineType({
  name: "caseStudy",
  title: "Case Study",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Document Title (Internal Use)",
      type: "string",
      description: "e.g. StaffOS Case Study",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "showcaseImage",
      title: "Product Showcase Image",
      type: "image",
      description: "Separate image used on the listing page and landing page project section.",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alt Text",
          validation: (rule) => rule.required(),
        },
      ],
    }),
    
    // Section 1 — Project Overview (Hero)
    defineField({
      name: "projectOverview",
      title: "Project Overview (Hero)",
      type: "object",
      fields: [
        // Part 1 — Project Identity
        defineField({
          name: "clientLogo",
          title: "Client Logo",
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alt Text",
              validation: (rule) => rule.required(),
            },
          ],
        }),
        defineField({
          name: "projectName",
          title: "Project Name",
          type: "string",
          validation: (rule) => rule.required(),
        }),
        
        // Part 2 — Project Summary
        defineField({
          name: "summaryHeadline",
          title: "Summary Headline",
          type: "string",
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: "summaryDescription",
          title: "Summary Description",
          type: "text",
          rows: 3,
          validation: (rule) => rule.required(),
        }),
        
        // Part 3 — Metadata
        defineField({
          name: "company",
          title: "Company",
          type: "string",
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: "industry",
          title: "Industry",
          type: "string",
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: "myRole",
          title: "My Role",
          type: "string",
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: "stack",
          title: "Stack",
          type: "string",
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: "projectType",
          title: "Project Type",
          type: "string",
          validation: (rule) => rule.required(),
        }),
        
        // Part 4 — Stats
        defineField({
          name: "stats",
          title: "Stats",
          type: "array",
          of: [
            {
              type: "object",
              name: "statItem",
              title: "Stat Item",
              fields: [
                { name: "value", type: "string", title: "Value", validation: (rule) => rule.required() },
                { name: "label", type: "string", title: "Label", validation: (rule) => rule.required() },
              ],
            },
          ],
        }),
        
        // Part 5 — Hero Images
        defineField({
          name: "heroImages",
          title: "Hero Images",
          type: "array",
          of: [
            {
              type: "object",
              name: "heroImageItem",
              title: "Hero Image Item",
              fields: [
                { name: "image", type: "image", title: "Image", options: { hotspot: true }, validation: (rule) => rule.required() },
                { name: "alt", type: "string", title: "Alt Text", validation: (rule) => rule.required() },
              ],
            },
          ],
        }),
      ],
    }),
    
    // Section 2 — Background
    defineField({
      name: "backgroundSection",
      title: "Background Section",
      type: "object",
      fields: [
        defineField({
          name: "body",
          title: "Body Content (Portable Text)",
          type: "array",
          of: [{ type: "block" }],
          validation: (rule) => rule.required(),
        }),
      ],
    }),
    
    // Section 3 — Challenges
    defineField({
      name: "challengesSection",
      title: "Challenges Section",
      type: "object",
      fields: [
        // Part 1 — Challenge Cards
        defineField({
          name: "challenges",
          title: "Challenges",
          type: "array",
          of: [
            {
              type: "object",
              name: "challengeItem",
              title: "Challenge Item",
              fields: [
                { name: "title", type: "string", title: "Title", validation: (rule) => rule.required() },
                { name: "description", type: "text", title: "Description", validation: (rule) => rule.required() },
              ],
            },
          ],
        }),
        // Part 2 — Feature Screenshots
        defineField({
          name: "screenshots",
          title: "Feature Screenshots",
          type: "array",
          of: [
            {
              type: "object",
              name: "screenshotItem",
              title: "Screenshot Item",
              fields: [
                { name: "image", type: "image", title: "Image", options: { hotspot: true }, validation: (rule) => rule.required() },
                { name: "alt", type: "string", title: "Alt Text", validation: (rule) => rule.required() },
              ],
            },
          ],
        }),
      ],
    }),
    
    // Section 4 — Solution
    defineField({
      name: "solutionSection",
      title: "Solution Section",
      type: "object",
      fields: [
        // Part 1 — Solution Points
        defineField({
          name: "solutionPoints",
          title: "Solution Points",
          type: "array",
          of: [
            {
              type: "object",
              name: "solutionPointItem",
              title: "Solution Point Item",
              fields: [
                { name: "title", type: "string", title: "Title", validation: (rule) => rule.required() },
                { name: "description", type: "text", title: "Description", validation: (rule) => rule.required() },
              ],
            },
          ],
        }),
        // Part 2 — Solution Images
        defineField({
          name: "solutionImages",
          title: "Solution Images",
          type: "array",
          of: [
            {
              type: "object",
              name: "solutionImageItem",
              title: "Solution Image Item",
              fields: [
                { name: "image", type: "image", title: "Image", options: { hotspot: true }, validation: (rule) => rule.required() },
                { name: "alt", type: "string", title: "Alt Text", validation: (rule) => rule.required() },
              ],
            },
          ],
        }),
        // Part 3 — Closing Quote
        defineField({
          name: "quote",
          title: "Closing Quote",
          type: "object",
          fields: [
            { name: "quoteText", type: "text", title: "Quote Text", validation: (rule) => rule.required() },
            { name: "attribution", type: "string", title: "Attribution (Optional)" },
          ],
        }),
      ],
    }),
    
    // Section 5 — Key Outcomes
    defineField({
      name: "keyOutcomesSection",
      title: "Key Outcomes Section",
      type: "object",
      fields: [
        defineField({
          name: "outcomes",
          title: "Outcomes",
          type: "array",
          of: [
            {
              type: "object",
              name: "outcomeItem",
              title: "Outcome Item",
              fields: [
                { name: "title", type: "string", title: "Title", validation: (rule) => rule.required() },
                { name: "description", type: "text", title: "Description", validation: (rule) => rule.required() },
              ],
            },
          ],
        }),
      ],
    }),
    
    // Section 6 — Technology Stack
    defineField({
      name: "techStackSection",
      title: "Technology Stack Section",
      type: "object",
      fields: [
        defineField({
          name: "stackItems",
          title: "Stack Items",
          type: "array",
          of: [
            {
              type: "object",
              name: "techStackItem",
              title: "Tech Stack Item",
              fields: [
                { name: "label", type: "string", title: "Label", validation: (rule) => rule.required() },
              ],
            },
          ],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: "projectOverview.projectName",
      media: "projectOverview.heroImages.0.image",
    },
  },
});
