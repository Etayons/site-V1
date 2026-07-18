interface EyebrowBadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function EyebrowBadge({ children, className = '' }: EyebrowBadgeProps) {
  return (
    <div data-reveal className="glass inline-block px-4 py-2">
      <span className={`eyb text-gold ${className}`}>{children}</span>
    </div>
  );
}
