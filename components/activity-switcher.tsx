'use client';

import { ActivityType } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ActivitySwitcherProps {
  currentActivity: ActivityType;
  onActivityChange: (activity: ActivityType) => void;
}

export function ActivitySwitcher({
  currentActivity,
  onActivityChange,
}: ActivitySwitcherProps) {
  const activities: { value: ActivityType; label: string }[] = [
    { value: 'avocat', label: 'Services juridiques' },
    { value: 'notary', label: 'Notaire' },
    { value: 'interior-designer', label: "Décorateur d'intérieur" },
  ];

  return (
    <div className="flex gap-2">
      {activities.map((activity) => (
        <Button
          key={activity.value}
          variant={currentActivity === activity.value ? 'default' : 'outline'}
          onClick={() => onActivityChange(activity.value)}
          className={cn(
            'min-w-[120px]',
            currentActivity === activity.value && 'shadow-lg'
          )}
        >
          {activity.label}
        </Button>
      ))}
    </div>
  );
}