function PageHeader({ title }) {
  return (
    <section className="overflow-hidden bg-accent-light">
      <div className="flex items-center max-w-6xl px-6 py-16 mx-auto min-h-25">
        
        {/* page title */}
        <h1 className="p-3 text-4xl border-b md:text-5xl border-secondary/40">{title}</h1>
        
      </div>
    </section>
  );
}

export default PageHeader;
