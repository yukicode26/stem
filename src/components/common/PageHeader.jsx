import Image from "next/image";

function PageHeader({ title }) {
  return (
    <section className="overflow-hidden bg-accent-light">
      <div className="mx-auto flex min-h-25 max-w-6xl items-center justify-between px-6 py-16">
        {/* Page title */}

        <h1 className="text-4xl md:text-5xl p-3 border-b border-secondary/40">{title}</h1>
      </div>
    </section>
  );
}

export default PageHeader;
