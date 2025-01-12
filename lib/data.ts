import { Activity, Review } from './types';
import { Briefcase, Stamp, Paintbrush } from 'lucide-react';

export const activities: Record<string, Activity> = {
  'law-firm': {
    title: 'Expert Legal Services',
    description: 'Dedicated legal professionals providing comprehensive solutions for all your legal needs.',
    features: [
      'Corporate Law',
      'Civil Litigation',
      'Real Estate Law',
      'Family Law',
      'Intellectual Property'
    ],
    heroImage: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80',
    icon: Briefcase
  },
  'notary': {
    title: 'Professional Notary Services',
    description: 'Certified notary services ensuring the legality and authenticity of your important documents.',
    features: [
      'Document Authentication',
      'Oath Administration',
      'Affidavit Verification',
      'Contract Certification',
      'Identity Verification'
    ],
    heroImage: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80',
    icon: Stamp
  },
  'interior-designer': {
    title: 'Creative Interior Design',
    description: 'Transforming spaces into beautiful, functional environments that reflect your style.',
    features: [
      'Residential Design',
      'Commercial Spaces',
      'Space Planning',
      'Color Consultation',
      'Furniture Selection'
    ],
    heroImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80',
    icon: Paintbrush
  }
};

export const mockReviews: Review[] = [
  {
    author: "Sarah Johnson",
    rating: 5,
    content: "Exceptional service! Exceeded all expectations.",
    date: "2024-03-15"
  },
  {
    author: "Michael Chen",
    rating: 5,
    content: "Professional and thorough. Highly recommended!",
    date: "2024-03-10"
  },
  {
    author: "Emma Davis",
    rating: 4,
    content: "Great experience working with this team.",
    date: "2024-03-05"
  }
];