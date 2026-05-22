import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";

function CartPage() {
  // Create React state for the cart item
  const [cartItem, setCartItem] = useState(null);

  const [quantity, setQuantity] = useState(1);

  // Run only when the page loads
  useEffect(() => {
    // Get saved cart data from browser localStorage
    const savedItem = localStorage.getItem("cartItem");

    // Check if cart data exists
    if (savedItem) {
      // Convert the saved string back into an object
      // and save it into React state
      setCartItem(JSON.parse(savedItem));
    }
  }, []);
  // Prevent errors when there is no cart data
  if (!cartItem) {
    return (
      <div className="text-center">
        <h1 className="py-10 text-4xl">Your Cart</h1>
        <p className="text-xl">Your cart is empty.</p>
        <Link href="/shop" className="w-fit my-10 py-3 px-6 inline-block border">
          Back to Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-6 py-12 md:px-8 md:py-16">
      <h1 className="text-4xl">Your Cart</h1>

      <div className="mt-10 flex flex-col gap-6 border border-secondary-light p-4 md:flex-row md:gap-8 md:p-6">
        <Image
          src={cartItem.image}
          alt={cartItem.name}
          width={200}
          height={200}
          className="h-[220px] w-full object-cover md:h-[200px] md:w-[200px]"
        />
        <div>
          <h2 className="text-3xl">{cartItem.name}</h2>
          <p className="pt-2">Quantity: {quantity}</p>
          <div className="mt-2 flex items-center gap-4">
            <button
              onClick={() => {
                if (quantity > 1) {
                  setQuantity(quantity - 1);
                }
              }}
              className="border border-secondary-light px-3 py-1"
            >-</button>

            <p>{quantity}</p>
            <button onClick={() => setQuantity(quantity + 1)} className="border border-secondary-light px-3 py-1">
              +
            </button>
          </div>
          <p className="py-2 text-2xl">${cartItem.price * quantity}.00</p>
          {/* // Remove cart data from localStorage */}
          <button className="mt-5 text-sm uppercase tracking-[0.2em] hover:underline underline-offset-8 hover:decoration-secondary-light"
            onClick={() => {
              localStorage.removeItem("cartItem");
              // Clear the React cart state
              setCartItem(null);

            }}
          >
            Remove
          </button>
        </div>
      </div>

      <div className="my-8 flex justify-between border-t pt-6">
        <p className="text-2xl">Total</p>
        <p className="text-2xl">${cartItem.price * quantity}.00</p>
      </div>

      <div className="flex justify-end">
        <Link href="/shop/checkout" className="mt-8 inline-block w-full border px-8 py-4 text-center text-sm uppercase tracking-[0.2em] transition hover:bg-accent hover:text-primary sm:w-fit">
          Checkout
        </Link>
      </div>
    </div>
  );
}

export default CartPage;
