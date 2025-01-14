import { Activity, Review } from './types';
import { Briefcase, Stamp, Paintbrush } from 'lucide-react';

export const activities: Record<string, Activity> = {
  'law-firm': {
    title: 'Services Juridiques Experts',
    description: 'Des professionnels du droit dévoués offrant des solutions complètes pour tous vos besoins juridiques.',
    features: [
      'Droit des Sociétés',
      'Contentieux Civil',
      'Droit Immobilier',
      'Droit de la Famille',
      'Propriété Intellectuelle'
    ],
    heroImage: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80',
    icon: Briefcase
  },
  'notary': {
    title: 'Services Notariaux Professionnels',
    description: 'Services notariaux certifiés garantissant la légalité et l\'authenticité de vos documents importants.',
    features: [
      'Authentification de Documents',
      'Administration de Serments',
      'Vérification d\'Affidavits',
      'Certification de Contrats',
      'Vérification d\'Identité'
    ],
    heroImage: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80',
    icon: Stamp
  },
  'interior-designer': {
    title: 'Design d\'Intérieur Créatif',
    description: 'Transformation d\'espaces en environnements beaux et fonctionnels qui reflètent votre style.',
    features: [
      'Design Résidentiel',
      'Espaces Commerciaux',
      'Aménagement d\'Espace',
      'Conseil en Couleurs',
      'Sélection de Mobilier'
    ],
    heroImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80',
    icon: Paintbrush
  }
};

export const mockReviews: Review[] = [
  {
    author: "Sarah Martin",
    rating: 5,
    content: "Service exceptionnel ! A dépassé toutes les attentes.",
    date: "2024-03-15"
  },
  {
    author: "Michel Chen",
    rating: 5,
    content: "Professionnel et minutieux. Hautement recommandé !",
    date: "2024-03-10"
  },
  {
    author: "Emma Dubois",
    rating: 4,
    content: "Excellente expérience avec cette équipe.",
    date: "2024-03-05"
  }
];