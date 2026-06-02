import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/common/PageHeader";

function ShopPage({ items = [] }) {
  return (
    <>
      <PageHeader title="Shop" />
      <main className="px-6 py-12 mx-auto max-w-7xl md:px-10 md:py-16 lg:px-20">
        {/* Product grid */}
        <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <article key={item.id} className="w-full max-w-sm p-6 mx-auto border group border-secondary-light">
              <Link href={`/shop/${item.id}`}>
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
                  <div className="flex items-start justify-between gap-4">
                    <h2 className="text-2xl">{item.name}</h2>

                    <p className="shrink-0">${item.price}.00</p>
                  </div>

                  <div aria-label={`View details for ${item.name}`} className="inline-block mt-4 py-2 text-sm uppercase tracking-[0.15em] hover:underline hover:underline-offset-8 hover:decoration-secondary-light">
                    View Details
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </section>
      </main>
    </>
  );
}

export const getStaticProps = async context => {
  const response = await fetch(`${process.env.SERVER_NAME}/api/products`);
  const data = await response.json();
  console.log(data);

  if(!response.ok){
    throw new Error(`Failed to fetch shopItems - Error ${response.status}: ${data.message}`)
  }
  return {
    props: {
      items:data,
    },
  };
};

export default ShopPage;
