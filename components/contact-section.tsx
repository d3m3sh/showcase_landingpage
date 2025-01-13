'use client';

import { ContactForm } from '@/components/contact-form';

export function ContactSection() {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <h2 className="text-3xl font-semibold mb-4 text-primary">
          Contactez-nous
        </h2>
        <p className="text-muted-foreground mb-8">
          Prenez contact avec nous pour discuter de la façon dont nous pouvons vous aider à atteindre vos objectifs.
        </p>
      </div>
      <ContactForm />
    </div>
  );
}