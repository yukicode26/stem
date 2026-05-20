import Link from "next/link";

function CartPage() {
  return (
    <div className="mx-auto max-w-4xl px-8 py-16">
      <h1 className="text-4xl">Your Cart</h1>

      <div className="mt-10 border p-6">
        <p>Ivory Arrangement</p>
        <p>Quantity: 1</p>
        <p>$85.00</p>
      </div>

      <div className="my-8 flex justify-between border-t pt-6">
        <p>Total</p>
        <p>$85.00</p>
      </div>

      <div className="flex justify-end">
      <Link href="/shop/checkout" className="mt-8 inline-block border px-6 py-3">Checkout</Link>
      </div>
    </div>
  );
}

export default CartPage;
