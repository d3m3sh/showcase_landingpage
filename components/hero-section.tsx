'use client';

import { Button } from '@/components/ui/button';
import { TemplateType } from '@/lib/types';
import { cn } from '@/lib/utils';

interface HeroSectionProps {
  title: string;
  description: string;
  heroImage: string;
  template: TemplateType;
}

const heroStyles: Record<TemplateType, string> = {
  modern: 'grid md:grid-cols-2 gap-8 items-center',
  classic: 'text-center space-y-8',
  minimal: 'space-y-6',
};

export function HeroSection({ title, description, heroImage, template }: HeroSectionProps) {
  return (
    <div className={cn(heroStyles[template])}>
      <div className="space-y-6">
        <h1 className="text-4xl font-bold tracking-tight text-primary">
          {title}
        </h1>
        <p className="text-lg text-muted-foreground">{description}</p>
        <Button size="lg" className="bg-primary hover:bg-primary/90">
          Get Started
        </Button>
      </div>
      <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl">
        <img
          src={heroImage}
          alt={title}
          className="object-cover"
        />
      </div>
    </div>
  );
}