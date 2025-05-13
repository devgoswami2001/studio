import { BrainCircuit } from 'lucide-react';
import type { LucideProps } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LogoProps {
  iconProps?: LucideProps;
  textClassName?: string;
  iconClassName?: string;
  containerClassName?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function Logo({ iconProps, textClassName, iconClassName, containerClassName, size = 'md' }: LogoProps) {
  const sizeClasses = {
    sm: { icon: 'h-6 w-6', text: 'text-xl' },
    md: { icon: 'h-8 w-8', text: 'text-2xl' },
    lg: { icon: 'h-10 w-10', text: 'text-3xl' },
  };
  
  return (
    <div className={cn('flex items-center gap-2', containerClassName)}>
      <BrainCircuit 
        className={cn(
          'text-primary',
          sizeClasses[size].icon,
          iconClassName
        )} 
        {...iconProps} 
      />
      <span 
        className={cn(
          'font-bold text-foreground',
          sizeClasses[size].text,
          textClassName
        )}
      >
        ChartMind AI
      </span>
    </div>
  );
}
