import Image from "next/image";
import Link from "next/link";

function AboutPreview() {
  return (
    <section className="px-6 py-24 md:px-10">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        {/* Left image */}
        <div className="overflow-hidden rounded-tr-[120px] bg-[#F4F1EC]">
          <Image
            src="/images/aboutpreview.webp"
            alt="Florist arranging flowers"
            width={900}
            height={1000}
            className="h-[520px] w-full object-cover transition duration-[5000ms] hover:scale-105"
          />
        </div>

        {/* Right content */}
        <div className="lg:pl-8">
          <p className="text-xs uppercase tracking-[0.35em] text-[#8A9A8A]">
            About Stem.
          </p>

          <h2 className="mt-5 max-w-xl text-4xl leading-tight text-[#2B2B2B] md:text-5xl">
            Quiet flowers,
            <br />
            thoughtfully made.
          </h2>

          <p className="mt-8 max-w-lg leading-8 text-[#6F6A64]">
            We create soft, natural flower arrangements for everyday moments,
            calm spaces, and thoughtful gifts.
          </p>

          <p className="mt-5 max-w-lg leading-8 text-[#6F6A64]">
            Each bouquet is arranged in Melbourne with seasonal blooms, gentle
            colours, and a simple sense of beauty.
          </p>

          <Link
            href="/about"
            className="mt-10 inline-block  border border-secondary-light px-8 py-4 text-sm uppercase tracking-[0.2em] transition hover:bg-accent hover:text-primary"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}

export default AboutPreview;