'use client';

import { TemplateType } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface TemplateSwitcherProps {
  currentTemplate: TemplateType;
  onTemplateChange: (template: TemplateType) => void;
}

export function TemplateSwitcher({
  currentTemplate,
  onTemplateChange,
}: TemplateSwitcherProps) {
  const templates: { value: TemplateType; label: string }[] = [
    { value: 'modern', label: 'Modern' },
    { value: 'classic', label: 'Classic' },
    { value: 'minimal', label: 'Minimal' },
  ];

  return (
    <div className="flex gap-2">
      {templates.map((template) => (
        <Button
          key={template.value}
          variant={currentTemplate === template.value ? 'default' : 'outline'}
          onClick={() => onTemplateChange(template.value)}
          className={cn(
            'min-w-[100px]',
            currentTemplate === template.value && 'shadow-lg'
          )}
        >
          {template.label}
        </Button>
      ))}
    </div>
  );
}