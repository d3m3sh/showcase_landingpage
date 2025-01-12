'use client';

import { useState } from 'react';
import { ActivityType, TemplateType } from '@/lib/types';
import { activities } from '@/lib/data';
import { ActivitySwitcher } from '@/components/activity-switcher';
import { TemplateSwitcher } from '@/components/template-switcher';
import { ReviewsSection } from '@/components/reviews-section';
import { SectionContainer } from '@/components/section-container';
import { HeroSection } from '@/components/hero-section';
import { ServicesSection } from '@/components/services-section';
import { ContactSection } from '@/components/contact-section';
import { cn } from '@/lib/utils';

export default function Home() {
  const [currentActivity, setCurrentActivity] = useState<ActivityType>('law-firm');
  const [currentTemplate, setCurrentTemplate] = useState<TemplateType>('modern');

  const activity = activities[currentActivity];

  const templates: Record<TemplateType, string> = {
    modern: 'max-w-7xl mx-auto px-6',
    classic: 'max-w-5xl mx-auto px-8',
    minimal: 'max-w-4xl mx-auto px-4',
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-7xl mx-auto p-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <ActivitySwitcher
            currentActivity={currentActivity}
            onActivityChange={setCurrentActivity}
          />
          <TemplateSwitcher
            currentTemplate={currentTemplate}
            onTemplateChange={setCurrentTemplate}
          />
        </div>
      </header>

      <main className={cn(templates[currentTemplate], 'main-container')}>
        <SectionContainer id="hero" className="from-primary/5">
          <HeroSection
            title={activity.title}
            description={activity.description}
            heroImage={activity.heroImage}
            template={currentTemplate}
          />
        </SectionContainer>

        <SectionContainer id="services" className="from-secondary/5">
          <ServicesSection
            features={activity.features}
            template={currentTemplate}
            Icon={activity.icon}
          />
        </SectionContainer>

        <SectionContainer id="reviews" className="from-primary/5">
          <h2 className="text-3xl font-semibold mb-8 text-primary">
            Client Reviews
          </h2>
          <ReviewsSection />
        </SectionContainer>

        <SectionContainer id="contact" className="from-secondary/5">
          <ContactSection />
        </SectionContainer>
      </main>
    </div>
  );
}