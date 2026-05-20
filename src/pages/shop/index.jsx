import shopItems from "@/data/shopItems";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/common/PageHeader";

function ShopPage() {
  return (
    <>
      <PageHeader title="Shop" />
      <main className="mx-auto max-w-6xl px-6 py-16 md:px-10 lg:px-20">
        {/* Product grid */}
        <section className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {shopItems.map((item) => (
            <article key={item.id} className="group border p-4 mx-auto w-full max-w-80">
              <Link href={`/shop/${item.id}`}>
                <div className="overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={400}
                    height={500}
                    className="aspect-[4/5] h-auto w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="mt-5 space-y-2">
                  <h2 className="text-2xl">{item.name}</h2>

                  <p className="text-muted">{item.price}</p>
                </div>
              </Link>
            </article>
          ))}
        </section>
      </main>
    </>
  );
}

export default ShopPage;
