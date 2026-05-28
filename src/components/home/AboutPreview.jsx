import Image from "next/image";
import Link from "next/link";

function AboutPreview() {
  return (
    <section className="px-6 py-16 md:px-10 md:py-24">
      <div className="grid items-center gap-12 mx-auto max-w-7xl lg:grid-cols-2 lg:gap-16">
        {/* Left image */}
        <div className="overflow-hidden rounded-tr-[80px] md:rounded-tr-[120px]">
          <Image
            src="/images/about-preview.webp"
            alt="Florist arranging flowers"
            width={900}
            height={1000}
            className="object-cover w-full transition ease-out h-95 duration-[3000ms] hover:scale-105 md:h-130"
          />
        </div>

        {/* Right content */}
        <div className="lg:pl-8">
          <p className="text-sm uppercase tracking-[0.3em] text-secondary md:tracking-[0.35em]">About stem.</p>

          <h2 className="max-w-xl mt-5 text-3xl leading-tight sm:text-4xl md:text-5xl">
            Quiet flowers,
            <br />
            thoughtfully made.
          </h2>

          <p className="max-w-lg mt-6 leading-8 md:mt-8">
            We create soft, natural flower arrangements for everyday moments, calm spaces, and thoughtful gifts.
          </p>

          <p className="max-w-lg mt-5 leading-8">
            Each bouquet is arranged in Melbourne with seasonal blooms, gentle colours, and a simple sense of beauty.
          </p>

          <Link
            href="/about"
            className="mt-8 inline-block border border-secondary-light px-6 py-3 text-sm uppercase tracking-[0.2em] transition hover:bg-accent hover:text-primary md:mt-10 md:px-8 md:py-4 md:text-sm"
            aria-label="Learn more about stem"
          >
            About stem.
          </Link>
        </div>
      </div>
    </section>
  );
}

export default AboutPreview;
