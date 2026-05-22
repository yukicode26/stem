import Image from "next/image";
import Link from "next/link";

function AboutPreview() {
  return (
    <section className="px-6 py-16 md:px-10 md:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left image */}
        <div className="overflow-hidden rounded-tr-[80px] md:rounded-tr-[120px]">
          <Image
            src="/images/aboutpreview.webp"
            alt="Florist arranging flowers"
            width={900}
            height={1000}
            className="h-[380px] w-full object-cover transition duration-[5000ms] hover:scale-105 md:h-[520px]"
          />
        </div>

        {/* Right content */}
        <div className="lg:pl-8">
          <p className="text-xs uppercase tracking-[0.3em] text-accent md:tracking-[0.35em]">
            About Stem.
          </p>

          <h2 className="mt-5 max-w-xl text-3xl leading-tight sm:text-4xl md:text-5xl">
            Quiet flowers,
            <br />
            thoughtfully made.
          </h2>

          <p className="mt-6 max-w-lg leading-8 md:mt-8">
            We create soft, natural flower arrangements for everyday moments,
            calm spaces, and thoughtful gifts.
          </p>

          <p className="mt-5 max-w-lg leading-8">
            Each bouquet is arranged in Melbourne with seasonal blooms, gentle
            colours, and a simple sense of beauty.
          </p>

          <Link
            href="/about"
            className="mt-8 inline-block border border-secondary-light px-6 py-3 text-xs uppercase tracking-[0.2em] transition hover:bg-accent hover:text-primary md:mt-10 md:px-8 md:py-4 md:text-sm"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}

export default AboutPreview;