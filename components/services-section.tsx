'use client';

import { ServiceCard } from '@/components/service-card';
import { TemplateType } from '@/lib/types';
import { LucideIcon } from 'lucide-react';

interface ServicesSectionProps {
  features: string[];
  template: TemplateType;
  Icon: LucideIcon;
}

const featuresStyles: Record<TemplateType, string> = {
  modern: 'grid md:grid-cols-3 gap-6',
  classic: 'grid md:grid-cols-2 gap-8',
  minimal: 'space-y-4',
};

export function ServicesSection({ features, template, Icon }: ServicesSectionProps) {
  return (
    <>
      <h2 className="text-3xl font-semibold mb-8 text-primary">
        Nos Services
      </h2>
      <div className={featuresStyles[template]}>
        {features.map((feature, index) => (
          <ServiceCard
            key={index}
            title={feature}
            description={`Expertise professionnelle en ${feature.toLowerCase()} pour répondre à vos besoins.`}
            Icon={Icon}
          />
        ))}
      </div>
    </>
  );
}