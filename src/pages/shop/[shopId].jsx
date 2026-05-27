import { useRouter } from "next/router";
import shopItems from "@/data/shopItems";
import Image from "next/image";
import Link from "next/link";

function ShopId() {
  const router = useRouter();
  // Get dynamic route parameter from URL
  const shopId = router.query.shopId;
  // Find matching product data
  const shop = shopItems.find((item) => item.id === shopId);
  if (!shop) {
    return <p className="py-20 text-lg text-center">Loading product...</p>;
  }

  return (
    <div className="grid max-w-6xl gap-12 px-8 py-16 mx-auto md:grid-cols-2">
      <div className="p-6 border border-secondary-light">
        <Image src={shop.image} alt={shop.name} width={500} height={600} className="object-cover w-full aspect-4/5" />
      </div>
      <div className="flex flex-col justify-center">
        <p className="mb-4 text-sm uppercase tracking-[0.25em] text-secondary">{shop.category}</p>
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
          Back to Shop
        </Link>
      </div>
    </div>
  );
}

export default ShopId;
