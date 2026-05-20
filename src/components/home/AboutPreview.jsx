import Image from "next/image";
import Link from "next/link";

function AboutPreview() {
  return (
    <section className="px-6 py-24">
      
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        
        {/* Left content */}
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-[#8B5FBF]">
            About Us
          </p>

          <h2 className="mt-4 font-serif text-5xl leading-tight text-[#2B2430]">
            Crafted with care,
            <br />
            inspired by simplicity.
          </h2>

          <p className="mt-8 max-w-lg leading-8 text-[#6B6570]">
            We believe flowers should feel soft, natural, and timeless.
            Every bouquet is carefully arranged in Melbourne using seasonal blooms and thoughtful details.
          </p>

          <p className="mt-6 max-w-lg leading-8 text-[#6B6570]">
            Inspired by minimal living and quiet beauty, our collections are designed for everyday moments.
          </p>

          <Link
            href="/about"
            className="mt-10 inline-block rounded-xl border border-[#D8C7EA] px-8 py-4 text-[#2B2430] transition hover:bg-[#F4EEF8]"
          >
            Learn More
          </Link>
        </div>

        {/* Right image */}
        <div className="overflow-hidden rounded-bl-[140px]">
          <Image
            src="/images/about-preview.jpg"
            alt="Florist arranging flowers"
            width={900}
            height={1000}
            className="h-full w-full object-cover"
          />
        </div>

      </div>

    </section>
  );
}

export default AboutPreview;
