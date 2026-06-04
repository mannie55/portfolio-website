type PageContainerProps = {
  children: React.ReactNode;
};

export function PageContainer({ children }: PageContainerProps) {
  return (
    <div className="mx-auto w-full max-w-container-xxlarge flex-1 px-page py-section-sm md:py-section">
      {children}
    </div>
  );
}
