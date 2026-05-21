import Image from "next/image";
import Link from "next/link";

function HomeHero() {
  return (
    <section className="mx-auto grid min-h-[80vh] max-w-7xl items-center gap-14 px-8 py-10 md:px-16 lg:grid-cols-2">
      {/* Left content */}
      <div className="max-w-xl">
        <p className="mb-5 text-xs uppercase tracking-[0.35em] text-muted">
          Melbourne Florist
        </p>

        <h1 className="font-serif text-5xl leading-[1.05] text-sub md:text-7xl">
          Quiet flowers
          <br />
          for beautiful
          <br />
          moments.
        </h1>

        <p className="mt-7 max-w-md text-base leading-8 text-muted">
          Fresh seasonal flowers, softly arranged in Melbourne for everyday gifts,
          calm homes, and special days.
        </p>

        {/* CTA buttons */}
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/shop"
            className="bg-sub px-8 py-4 text-sm uppercase tracking-[0.2em] text-main transition hover:bg-accent hover:text-primary"
          >
            Shop Now
          </Link>

          <Link
            href="/about"
            className="border border-border px-8 py-4 text-sm uppercase tracking-[0.2em] text-sub transition hover:bg-accent-light"
          >
            Our Story
          </Link>
        </div>
      </div>

      {/* Right image */}

        <div className="overflow-hidden rounded-tl-[250px]">
          <Image
            src="/images/hero.webp"
            alt="Minimal flower arrangement"
            width={700}
            height={800}
            className="h-[620px] w-full object-cover"
            priority
          />
        </div>
    </section>
  );
}

export default HomeHero;