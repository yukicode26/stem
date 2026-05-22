import Link from "next/link";
import Image from "next/image";



function FromTheJournal() {
  return (
          <section className="px-36 py-20">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="mt-4 font-serif text-4xl text-sub">From the Journal</h2>
          </div>

          <Link href="/journal" className="text-sm uppercase tracking-[0.2em] hover:underline hover:underline-offset-8 hover:decoration-secondary-light">
            View All
          </Link>
        </div>
<div className="grid gap-10 lg:grid-cols-3">
  {/* left column */}
        <div className="lg:col-span-2">
            <Image
              src="/images/journal/journal2.webp"
              alt="Seasonal flowers"
              width={900}
              height={1000}
              className="aspect-4/5 w-full h-auto object-cover"
              loading="eager"
            />
</div>
{/* right column */}
<div className="grid gap-6 grid-row-2">
          <div>
            <Image
              src="/images/journal/journal5.webp"
              alt="Seasonal flowers"
              width={500}
              height={400}
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>

          <div>
            <Image
              src="/images/journal/journal6.webp"
              alt="Seasonal flowers"
              width={500}
              height={400}
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>
</div>
</div>
      </section>
  );
}

export default FromTheJournal;