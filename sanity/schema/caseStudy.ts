import { defineField, defineType } from "sanity";

export const caseStudy = defineType({
  name: "caseStudy",
  title: "Case Study",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
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
      name: "summary",
      title: "Summary",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: { hotspot: true },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "role",
      title: "Role",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "industry",
      title: "Industry",
      type: "string",
      description: "e.g., HR & payroll SaaS, Healthcare, E-Commerce",
    }),
    defineField({
      name: "projectType",
      title: "Project Type",
      type: "string",
      description: "e.g., concept project, client work",
    }),
    defineField({
      name: "client",
      title: "Client",
      type: "string",
    }),
    defineField({
      name: "clientLogo",
      title: "Client Logo",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "tools",
      title: "Tools",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "featured",
      title: "Featured",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "metrics",
      title: "Key Metrics",
      type: "array",
      of: [
        {
          type: "object",
          name: "metric",
          title: "Metric",
          fields: [
            { name: "value", type: "string", title: "Value (e.g. 3×, ~40%)", validation: (r) => r.required() },
            { name: "description", type: "string", title: "Description", validation: (r) => r.required() },
          ],
        },
      ],
    }),
    defineField({
      name: "body",
      title: "Body Blocks",
      type: "array",
      of: [
        // Standard rich text blocks (paragraphs, bullet lists, headings)
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "H2", value: "h2" },
            { title: "H3", value: "h3" },
          ],
          lists: [{ title: "Bullet", value: "bullet" }],
        },
        // Standard standalone images
        {
          type: "image",
          title: "Image",
          fields: [
            {
              name: "caption",
              type: "string",
              title: "Caption",
            },
          ],
        },
        // Custom Block: Section
        {
          type: "object",
          name: "sectionBlock",
          title: "Section",
          fields: [
            { name: "title", type: "string", title: "Section Title", validation: (r) => r.required() },
            {
              name: "content",
              type: "array",
              title: "Paragraphs",
              of: [{ type: "string" }],
              validation: (r) => r.required(),
            },
          ],
        },
        // Custom Block: Challenges
        {
          type: "object",
          name: "challengesBlock",
          title: "Challenges",
          fields: [
            { name: "title", type: "string", title: "Section Title (e.g. The challenge)", validation: (r) => r.required() },
            {
              name: "items",
              type: "array",
              title: "Challenge Items",
              of: [
                {
                  type: "object",
                  fields: [
                    { name: "number", type: "string", title: "Number (e.g. 01)", validation: (r) => r.required() },
                    { name: "title", type: "string", title: "Title", validation: (r) => r.required() },
                    { name: "description", type: "text", title: "Description", validation: (r) => r.required() },
                  ],
                },
              ],
            },
            {
              name: "images",
              type: "array",
              title: "Mobile Screen Mockups",
              of: [{ type: "image", options: { hotspot: true } }],
              validation: (r) => r.required(),
            },
            {
              name: "bottomImage",
              type: "image",
              title: "Bottom Image (Optional)",
              options: { hotspot: true },
            },
          ],
        },
        // Custom Block: Solution
        {
          type: "object",
          name: "solutionBlock",
          title: "Solution",
          fields: [
            { name: "title", type: "string", title: "Section Title (e.g. The solution)", validation: (r) => r.required() },
            {
              name: "items",
              type: "array",
              title: "Solution Items",
              of: [
                {
                  type: "object",
                  fields: [
                    { name: "id", type: "string", title: "ID (e.g. 01)", validation: (r) => r.required() },
                    { name: "title", type: "string", title: "Title", validation: (r) => r.required() },
                    { name: "description", type: "text", title: "Description", validation: (r) => r.required() },
                  ],
                },
              ],
            },
            {
              name: "collageImage",
              type: "image",
              title: "Collage Image (Optional)",
              options: { hotspot: true },
            },
            {
              name: "gallery",
              type: "object",
              title: "Gallery Grid",
              fields: [
                {
                  name: "top",
                  type: "array",
                  title: "Top Row Images",
                  of: [
                    {
                      type: "image",
                      options: { hotspot: true },
                      fields: [{ name: "alt", type: "string", title: "Alt text" }],
                    },
                  ],
                },
                {
                  name: "bottom",
                  type: "array",
                  title: "Bottom Row Images",
                  of: [
                    {
                      type: "image",
                      options: { hotspot: true },
                      fields: [{ name: "alt", type: "string", title: "Alt text" }],
                    },
                  ],
                },
              ],
            },
            {
              name: "quote",
              type: "object",
              title: "Pull Quote",
              fields: [
                { name: "text", type: "text", title: "Quote Text", validation: (r) => r.required() },
                { name: "author", type: "string", title: "Author", validation: (r) => r.required() },
                { name: "role", type: "string", title: "Role/Title", validation: (r) => r.required() },
              ],
            },
          ],
        },
        // Custom Block: Outcomes
        {
          type: "object",
          name: "outcomesBlock",
          title: "Outcomes",
          fields: [
            { name: "title", type: "string", title: "Section Title (e.g. Key outcomes)", validation: (r) => r.required() },
            {
              name: "items",
              type: "array",
              title: "Outcome Items",
              of: [
                {
                  type: "object",
                  fields: [
                    { name: "id", type: "string", title: "ID (e.g. outcome-1)", validation: (r) => r.required() },
                    { name: "title", type: "string", title: "Title", validation: (r) => r.required() },
                    { name: "description", type: "text", title: "Description", validation: (r) => r.required() },
                    { name: "icon", type: "image", title: "Icon Image", validation: (r) => r.required() },
                    { name: "iconAlt", type: "string", title: "Icon Alt text" },
                    { name: "iconWrapper", type: "boolean", title: "Wrap Icon?", initialValue: false },
                  ],
                },
              ],
            },
          ],
        },
        // Custom Block: Tech Stack
        {
          type: "object",
          name: "techStackBlock",
          title: "Technology Stack",
          fields: [
            { name: "title", type: "string", title: "Section Title (e.g. Technology stack)", validation: (r) => r.required() },
            {
              name: "items",
              type: "array",
              title: "Stack Items",
              of: [{ type: "string" }],
              validation: (r) => r.required(),
            },
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "coverImage",
    },
  },
});
