import Image from "next/image";
import PageHeader from "@/components/common/PageHeader";

function AboutPage() {
  return (
    <>
      <PageHeader title="About Us" />

      <main>
        {/* Story */}
        <section className="mx-auto grid max-w-6xl items-center gap-16 px-6 py-20 md:grid-cols-2 md:py-28">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-accent">
              Our Story
            </p>

            <h1 className="mt-5 text-4xl font-light leading-tight text-sub md:text-5xl">
              Flowers for quiet, beautiful moments.
            </h1>

            <p className="mt-8 max-w-md leading-8 text-muted">
              Stem. was founded in Melbourne with a love for natural beauty
              and thoughtful design. We create soft, seasonal arrangements for
              everyday spaces, gifts, and special occasions.
            </p>
          </div>

          <div className="overflow-hidden">
            <Image
              src="/images/about.webp"
              alt="Fresh bouquet in a glass vase"
              width={600}
              height={800}
              loading="eager"
              className="aspect-4/5 object-cover"
            />
          </div>
        </section>
      </main>
    </>
  );
}

export default AboutPage;