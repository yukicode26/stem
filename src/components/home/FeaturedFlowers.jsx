import Link from "next/link";
import flowerItems from "@/data/FlowerItems";
import FlowerCard from "@/components/features/FlowerCard";

function FeaturedFlowers() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      
      {/* Section heading */}
      <div className="mb-12 flex items-end justify-between gap-6">
        
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-[#8B5FBF]">
            Collection
          </p>

          <h2 className="mt-3 font-serif text-4xl text-[#2B2430] md:text-5xl">
            Featured Flowers
          </h2>
        </div>

        <Link
          href="/shop"
          className="hidden text-sm uppercase tracking-[0.2em] text-[#2B2430] transition hover:opacity-60 md:block"
        >
          View All
        </Link>

      </div>

      {/* Product grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        
        {flowerItems.slice(0, 4).map((flower) => (
          <FlowerCard
            key={flower.id}
            flower={flower}
          />
        ))}

      </div>

      {/* Mobile button */}
      <div className="mt-10 text-center md:hidden">
        <Link
          href="/shop"
          className="inline-block rounded-xl border border-[#D8C7EA] px-6 py-3 text-sm uppercase tracking-[0.2em] text-[#2B2430] transition hover:bg-[#F4EEF8]"
        >
          View All
        </Link>
      </div>

    </section>
  );
}

export default FeaturedFlowers;