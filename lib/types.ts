export type ActivityType = 'law-firm' | 'notary' | 'interior-designer';
export type TemplateType = 'modern' | 'classic' | 'minimal';

export interface Activity {
  title: string;
  description: string;
  features: string[];
  heroImage: string;
  icon: string;
}

export interface Review {
  author: string;
  rating: number;
  content: string;
  date: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}