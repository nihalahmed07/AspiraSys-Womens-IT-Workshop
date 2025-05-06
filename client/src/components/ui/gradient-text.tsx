import { cn } from "@/lib/utils";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  from?: string;
  to?: string;
}

export function GradientText({ 
  children, 
  className, 
  from = "from-primary", 
  to = "to-secondary" 
}: GradientTextProps) {
  return (
    <span 
      className={cn(
        `bg-gradient-to-r ${from} ${to} inline-block text-transparent bg-clip-text`,
        className
      )}
    >
      {children}
    </span>
  );
}
