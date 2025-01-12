'use client';

import { ContactForm } from '@/components/contact-form';

export function ContactSection() {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <h2 className="text-3xl font-semibold mb-4 text-primary">
          Contact Us
        </h2>
        <p className="text-muted-foreground mb-8">
          Get in touch with us to discuss how we can help you achieve your goals.
        </p>
      </div>
      <ContactForm />
    </div>
  );
}