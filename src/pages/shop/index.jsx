import shopItems from "@/data/shopItems";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/common/PageHeader";

function ShopPage({items}) {
  return (
    <>
      <PageHeader title="Shop" />
      <main className="mx-auto max-w-7xl px-6 py-12 md:px-10 md:py-16 lg:px-20">
        {/* Product grid */}
        <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <article key={item.id} className="group mx-auto w-full max-w-sm border border-secondary-light p-4">
              <Link href={`/shop/${item.id}`}>
                <div className="overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={600}
                    height={500}
                    className="aspect-4/5 w-full object-cover transition duration-500 group-hover:scale-105"
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
