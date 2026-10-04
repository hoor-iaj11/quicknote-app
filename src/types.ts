export interface NoteItem {
  id: string;
  title: string;
  category: string;
  snippet: string;
  content: string;
  updatedAt: string;
  tags: string[];
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  monthlyPrice: number;
  annualPrice: number;
  isPopular?: boolean;
  ctaText: string;
  ctaAction: string;
  features: string[];
}

export interface TestimonialItem {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  avatarUrl: string;
  metricLabel: string;
  metricValue: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}
