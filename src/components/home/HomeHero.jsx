import Image from "next/image";
import Link from "next/link";

function HomeHero() {
  return (
    <section className="mx-auto grid min-h-[80vh] max-w-7xl items-center gap-12 px-6 py-14 md:px-12 md:py-20 lg:grid-cols-2 lg:px-16">
      
      {/* Left content */}
      <div className="max-w-xl">
        <p className="mb-5 text-sm uppercase tracking-[0.3em] text-secondary md:tracking-[0.35em]">
          Melbourne Florist
        </p>

        <h1 className="text-4xl leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl">
          Quiet flowers
          <br />
          for beautiful
          <br />
          moments.
        </h1>

        <p className="max-w-md mt-6 leading-8 md:mt-7">
          Fresh seasonal flowers, softly arranged in Melbourne for everyday gifts,
          calm homes, and special days.
        </p>

        <div className="flex flex-wrap gap-4 mt-8 md:mt-10">
          <Link
            href="/shop"
            className="border border-secondary-light px-6 py-3 text-sm uppercase tracking-[0.2em] transition hover:bg-accent hover:text-primary md:px-8 md:py-4 md:text-sm"
          >
            Shop Now
          </Link>

          <Link
            href="/about"
            className="border border-secondary-light px-6 py-3 text-sm uppercase tracking-[0.2em] transition hover:bg-accent-light md:px-8 md:py-4 md:text-sm"
          >
            Our Story
          </Link>
        </div>
      </div>

      {/* Right image */}
        <div className="overflow-hidden rounded-tl-[120px] md:rounded-tl-[180px] lg:rounded-tl-[250px]">
          <Image
            src="/images/hero.webp"
            alt="Minimal flower arrangement"
            width={700}
            height={800}
            className="object-cover w-full h-105 sm:h-130 lg:h-155"
            priority
          />
        </div>
    </section>
  );
}

export default HomeHero;