import shopItems from "@/data/shopItems";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/common/PageHeader";

function ShopPage({items}) {
  return (
    <>
      <PageHeader title="Shop" />
      <main className="px-6 py-12 mx-auto max-w-7xl md:px-10 md:py-16 lg:px-20">
        {/* Product grid */}
        <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <article key={item.id} className="w-full max-w-sm p-4 mx-auto border group border-secondary-light">
              <Link href={`/shop/${item.id}`} aria-label={`View ${item.name}`}>
                <div className="overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={600}
                    height={500}
                    className="object-cover w-full transition duration-500 aspect-4/5 group-hover:scale-105"
                  />
                </div>

                <div className="mt-5 space-y-2">
                  <h2 className="text-2xl">{item.name}</h2>

                  <p>${item.price}.00</p>
                </div>
              </Link>
            </article>
          ))}
        </section>
      </main>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      items: shopItems,
    },
  };
}

export default ShopPage;
