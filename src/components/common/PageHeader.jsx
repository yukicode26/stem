import Image from "next/image";

function PageHeader({ title }) {
  return (
    <section className="overflow-hidden bg-accent-light">
      <div className="mx-auto flex min-h-[180px] max-w-6xl items-center justify-between px-6 py-6">
        {/* Page title */}

        <h1 className="font-serif text-4xl text-[#2B2430] md:text-5xl">{title}</h1>

        {/* Decorative flower image */}

        <div className=" hidden  md:block">
          <Image src="/images/flower1.png" alt="Flower" width={320} height={220} className="object-contain" loading="lazy" />
        </div>
      </div>
    </section>
  );
}

export default PageHeader;
