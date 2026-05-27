import Link from "next/link";
import Image from "next/image";

function FromTheJournal() {
  return (
    <section className="px-6 py-16 md:px-12 lg:px-36 lg:py-20">
      <div className="flex items-end justify-between gap-6 mb-10 md:mb-12">
        <div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl">From the Journal</h2>
        </div>

        <Link
          href="/journal"
          className="text-sm uppercase tracking-[0.2em] hover:underline hover:underline-offset-8 hover:decoration-secondary-light md:text-sm"
        >
          View All
        </Link>
      </div>
      <div className="grid gap-6 lg:grid-cols-3 lg:gap-10">
        {/* left column */}
        <div className="lg:col-span-2">
          <Image
            src="/images/journal/journal2.webp"
            alt="Seasonal flowers"
            width={900}
            height={1000}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover w-full h-auto aspect-4/5 lg:h-full"
          />
        </div>
        {/* right column */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1 lg:grid-rows-2">
          <div>
            <Image
              src="/images/journal/journal5.webp"
              alt="Seasonal flowers"
              width={500}
              height={400}
              className="object-cover w-full h-full aspect-4/5 lg:h-full"
            />
          </div>

          <div>
            <Image
              src="/images/journal/journal6.webp"
              alt="Seasonal flowers"
              width={500}
              height={400}
              className="object-cover w-full h-full aspect-4/5 lg:h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FromTheJournal;
