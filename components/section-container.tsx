interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
  id: string;
}

export function SectionContainer({
  children,
  className,
  id,
}: SectionContainerProps) {
  return (
    <section id={id} className={`section-container ${className}`}>
      {children}
    </section>
  );
}