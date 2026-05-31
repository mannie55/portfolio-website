export type CaseStudyHeadingBlock = {
  type: "heading";
  level: 2 | 3;
  text: string;
};

export type CaseStudyParagraphBlock = {
  type: "paragraph";
  text: string;
};

export type CaseStudyImageBlock = {
  type: "image";
  src: string;
  alt: string;
  caption?: string;
};

export type CaseStudyListBlock = {
  type: "list";
  items: string[];
};

export type CaseStudyBlock =
  | CaseStudyHeadingBlock
  | CaseStudyParagraphBlock
  | CaseStudyImageBlock
  | CaseStudyListBlock;

export type CaseStudy = {
  slug: string;
  title: string;
  summary: string;
  coverImage: string;
  role: string;
  client?: string;
  tools: string[];
  publishedAt: string;
  featured: boolean;
  body: CaseStudyBlock[];
};

export type CaseStudySummary = Pick<
  CaseStudy,
  | "slug"
  | "title"
  | "summary"
  | "coverImage"
  | "role"
  | "client"
  | "tools"
  | "publishedAt"
  | "featured"
>;
