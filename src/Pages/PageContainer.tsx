type PageContainerProps = {
  children: React.ReactNode;
};
const PageContainer = ({ children }: PageContainerProps) => {
  return (
    <section className="dev_border ml-(---nav-bar-width) flex h-screen flex-1 flex-col justify-center">
      {children}
    </section>
  );
};

export default PageContainer;
