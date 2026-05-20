import Link from "next/link";
import { useEffect, useState } from "react";

function CartPage() {
  // Create React state for the cart item
  const [cartItem, setCartItem] = useState(null);
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
        <h1 className="py-10">Your Cart</h1>
        <p className="text-xl">Your cart is empty.</p>
<Link href="/shop" className='w-fit mt-10 py-3 px-6 inline-block border'>
Back to Shop
</Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-8 py-16">
      <h1 className="text-4xl">Your Cart</h1>

      <div className="mt-10 border p-6">
        <p>{cartItem.name}</p>
        <p>Quantity: 1</p>
        <p>${cartItem.price}.00</p>
        {/* // Remove cart data from localStorage */}
              <button onClick={()=> {localStorage.removeItem("cartItem");
              // Clear the React cart state
              setCartItem(null);
      }}
      >
      Remove</button>
      </div>

      <div className="my-8 flex justify-between border-t pt-6">
        <p>Total</p>
        <p>${cartItem.price}.00</p>
      </div>


      <div className="flex justify-end">
        <Link href="/shop/checkout" className="mt-8 inline-block border px-6 py-3">
          Checkout
        </Link>
      </div>
    </div>
  );
}

export default CartPage;
