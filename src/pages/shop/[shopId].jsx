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
      <div className="border p-6">
        <Image src={shop.image} alt={shop.name} width={500} height={600} className="aspect-[4/5] w-full object-cover" />
      </div>
      <div className="flex flex-col justify-center">
        <p className="mb-4 text-sm uppercase tracking-[0.25em] text-muted">{shop.category}</p>
        <h1>{shop.name}</h1>

        <p className="mt-6 text-2xl">${shop.price}.00</p>

        <label className="mt-6 flex flex-col gap-2">
          Quantity
          <select className="border px-4 py-2 w-fit">
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
        </label>
        <p className="mt-6">{shop.description}</p>
        <button
          onClick={() => {
            // Save the selected shop item into localStorage
            localStorage.setItem("cartItem", JSON.stringify(shop));
            alert(`${shop.name} added to cart`);
          }}
          className="w-fit mt-8 py-3 px-6 tracking-wide text-sm bg-accent-light transition hover:bg-transparent hover:text-secondary-light hover:border"
        >
          Add to Cart
        </button>
        <Link href="/shop" className="mt-8 block text-sm underline">
          back to shop
        </Link>
      </div>
    </div>
  );
}

export default ShopId;
