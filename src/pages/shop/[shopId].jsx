import { useRouter } from "next/router";
import shopItems from "@/data/shopItems";
import Image from "next/image";
import Link from "next/link";

function ShopId() {
  const router = useRouter();
  const shopId = router.query.shopId;
  console.log(shopId);
  const shop = shopItems.find((item) => item.id === shopId);
  if (!shop) {
    return <p>Loading...</p>;
  }

  return (
    <div className="mx-auto grid max-w-6xl gap-12 px-8 py-16 md:grid-cols-2">
      <div className="border border-secondary-light p-6">
        <Image src={shop.image} alt={shop.name} width={500} height={600} className="aspect-4/5 w-full object-cover" />
      </div>
      <div className="flex flex-col justify-center">
        <p className="mb-4 text-sm uppercase tracking-[0.25em] text-accent">{shop.category}</p>
        <h1 className="text-5xl">{shop.name}</h1>

        <p className="mt-6 text-2xl">${shop.price}.00</p>

        <p className="mt-6">{shop.description}</p>
        <button
          onClick={() => {
            const cartItem = {
              ...shop,
              quantity: 1,
            };
            // Save the selected shop item into localStorage
            localStorage.setItem("cartItem", JSON.stringify(cartItem));
            alert(`${shop.name} added to cart`);
          }}
          className="w-fit mt-8 py-4 px-8 border hover:border-secondary-light hover:bg-primary hover:text-secondary text-sm uppercase tracking-[0.2em] transition bg-accent text-primary cursor-pointer"
        >
          Add to Cart
        </button>
        <Link href="/shop" className="mt-20 block text-sm uppercase tracking-[0.2em] hover:underline hover:underline-offset-8 hover:decoration-secondary-light">
          back to shop
        </Link>
      </div>
    </div>
  );
}

export default ShopId;
