import Image from "next/image";
import Link from "next/link";

function HomeHero() {
  return (
    <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2">
      
      {/* Left content */}
      <div>
        <p className="mb-4 text-sm uppercase tracking-[0.25em] text-accent">
          Melbourne Florist
        </p>

        <h1 className="font-serif text-5xl leading-tight text-[#2B2430] md:text-6xl">
          Minimal flowers
          <br />
          to make every moment
          <br />
          bloom.
        </h1>

        <p className="mt-6 max-w-md text-lg leading-8 text-[#6B6570]">
          Fresh, beautiful flowers crafted in Melbourne.
        </p>

        {/* CTA buttons */}
        <div className="mt-10 flex flex-wrap gap-4">
          
          <Link
            href="/shop"
            className="rounded-xl bg-accent px-8 py-4 text-white transition hover:opacity-90"
          >
            Shop Now
          </Link>

          <Link
            href="/about"
            className="rounded-xl border border-[#D8C7EA] px-8 py-4 text-[#2B2430] transition hover:bg-[#F4EEF8]"
          >
            Learn More
          </Link>

        </div>
      </div>

      {/* Right image */}
      <div className="overflow-hidden rounded-tl-[140px] bg-accent-light">
        <Image
          src="/images/hero.png"
          alt="Flower bouquet"
          width={1000}
          height={1000}
          className="h-full w-full object-cover"
          priority
        />
      </div>

    </section>
  );
}

export default HomeHero;
