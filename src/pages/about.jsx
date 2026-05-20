import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/common/PageHeader";
import {
  HiOutlineSparkles,
  HiOutlineGlobeAlt,
  HiOutlineHeart,
} from "react-icons/hi2";

function AboutPage() {
  return (
    <>
      <PageHeader title="About Us" />

      <main>
        {/* Story */}
        <section className="mx-auto grid max-w-6xl items-center gap-16 px-6 py-20 md:grid-cols-2 md:py-28">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-muted">
              Our Story
            </p>

            <h1 className="mt-5 text-4xl font-light leading-tight text-sub md:text-5xl">
              Flowers for quiet, beautiful moments.
            </h1>

            <p className="mt-8 max-w-md leading-8 text-muted">
              Stem Studio was founded in Melbourne with a love for natural beauty
              and thoughtful design. We create soft, seasonal arrangements for
              everyday spaces, gifts, and special occasions.
            </p>
          </div>

          <div className="overflow-hidden">
            <Image
              src="/images/about.png"
              alt="Fresh bouquet in a glass vase"
              width={900}
              height={1100}
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
        </section>

        {/* Values */}
        <section className="border-y border-border bg-main px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <p className="text-center text-sm uppercase tracking-[0.3em] text-muted">
              Our Values
            </p>

            <h2 className="mx-auto mt-5 max-w-2xl text-center text-3xl font-light leading-tight text-sub md:text-4xl">
              Simple flowers, thoughtful choices, and gentle care.
            </h2>

            <div className="mt-16 grid gap-10 md:grid-cols-3">
              <div className="border border-border p-8 text-center">
                <HiOutlineSparkles className="mx-auto text-4xl text-sage-dark" />
                <h3 className="mt-6 text-xl font-medium text-sub">
                  Quality
                </h3>
                <p className="mt-4 leading-7 text-muted">
                  We choose fresh blooms with care and arrange each piece slowly.
                </p>
              </div>

              <div className="border border-border p-8 text-center">
                <HiOutlineGlobeAlt className="mx-auto text-4xl text-sage-dark" />
                <h3 className="mt-6 text-xl font-medium text-sub">
                  Sustainability
                </h3>
                <p className="mt-4 leading-7 text-muted">
                  We keep our work simple, seasonal, and mindful where possible.
                </p>
              </div>

              <div className="border border-border p-8 text-center">
                <HiOutlineHeart className="mx-auto text-4xl text-sage-dark" />
                <h3 className="mt-6 text-xl font-medium text-sub">
                  Local
                </h3>
                <p className="mt-4 leading-7 text-muted">
                  Made in Melbourne for homes, events, and everyday moments.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 py-20 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-muted">
            Contact
          </p>

          <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-light leading-tight text-sub md:text-4xl">
            We’d love to create something beautiful for you.
          </h2>

          <Link
            href="/contact"
            className="mt-10 inline-block border border-sub px-8 py-4 text-sm uppercase tracking-[0.2em] text-sub transition hover:bg-sub hover:text-white"
          >
            Get In Touch
          </Link>
        </section>
      </main>
    </>
  );
}

export default AboutPage;