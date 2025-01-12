'use client';

import { Card } from '@/components/ui/card';
import { Star } from 'lucide-react';
import { Review } from '@/lib/types';
import { mockReviews } from '@/lib/data';

export function ReviewsSection() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {mockReviews.map((review, index) => (
        <Card key={index} className="p-6">
          <div className="flex items-center gap-2 mb-4">
            {Array.from({ length: review.rating }).map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <p className="text-muted-foreground mb-4">{review.content}</p>
          <div className="mt-auto">
            <p className="font-semibold">{review.author}</p>
            <p className="text-sm text-muted-foreground">
              {new Date(review.date).toLocaleDateString()}
            </p>
          </div>
        </Card>
      ))}
    </div>
  );
}