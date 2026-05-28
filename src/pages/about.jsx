import Image from "next/image";
import PageHeader from "@/components/common/PageHeader";

function AboutPage() {
  return (
    <>
      <PageHeader title="About Us" />

      <main>
        {/* Story */}
        <section className="grid items-center max-w-6xl gap-16 px-6 py-20 mx-auto md:grid-cols-2 md:py-28">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-secondary">Our Story</p>

            <h2 className="mt-5 text-4xl font-light leading-tight md:text-5xl">
              Flowers for quiet, beautiful moments.
            </h2>

            <p className="max-w-md mt-8 leading-8">
              stem. was founded in Melbourne with a love for natural beauty and thoughtful design. We create soft,
              seasonal arrangements for everyday spaces, gifts, and special occasions.
            </p>
            <p className="max-w-md mt-8 leading-8">
              Inspired by calm interiors and modern living, our floral styling focuses on simplicity, warmth, and
              seasonal beauty.
            </p>
          </div>

          <div className="overflow-hidden">
            <Image
              src="/images/about.webp"
              alt="Fresh bouquet in a glass vase"
              width={600}
              height={800}
              loading="eager"
              className="object-cover aspect-4/5"
            />
          </div>
        </section>
      </main>
    </>
  );
}

export default AboutPage;
