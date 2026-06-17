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

export type CaseStudySectionBlock = {
  type: "section";
  title: string;
  content: string[];
};

export type CaseStudyChallengeItem = {
  number: string;
  title: string;
  description: string;
};

export type CaseStudyChallengeBlock = {
  type: "challenges";
  title: string;
  items: CaseStudyChallengeItem[];
  images: string[];
  bottomImage?: string;
};

export type CaseStudySolutionItem = {
  id: string;
  title: string;
  description: string;
};

export type CaseStudySolutionBlock = {
  type: "solution";
  title: string;
  items: CaseStudySolutionItem[];
  collageImage?: string;
  gallery: {
    top: { src: string; alt: string }[];
    bottom: { src: string; alt: string }[];
  };
  quote: {
    text: string;
    author: string;
    role: string;
  };
};

export type CaseStudyOutcomeItem = {
  id: string;
  title: string;
  description: string;
  icon: string;
  iconAlt: string;
  iconWrapper: boolean;
};

export type CaseStudyOutcomesBlock = {
  type: "outcomes";
  title: string;
  items: CaseStudyOutcomeItem[];
};

export type CaseStudyTechStackBlock = {
  type: "tech-stack";
  title: string;
  items: string[];
};

export type CaseStudyBlock =
  | CaseStudyHeadingBlock
  | CaseStudyParagraphBlock
  | CaseStudyImageBlock
  | CaseStudyListBlock
  | CaseStudySectionBlock
  | CaseStudyChallengeBlock
  | CaseStudySolutionBlock
  | CaseStudyOutcomesBlock
  | CaseStudyTechStackBlock;

export type CaseStudyMetric = {
  value: string;
  description: string;
};

export type CaseStudy = {
  slug: string;
  title: string;
  summary: string;
  coverImage: string;
  showcaseImage?: string;
  role: string;
  industry?: string;
  projectType?: string;
  client?: string;
  clientLogo?: string;
  tools: string[];
  publishedAt: string;
  featured: boolean;
  metrics?: CaseStudyMetric[];
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
