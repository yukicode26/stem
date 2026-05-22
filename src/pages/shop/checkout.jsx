import { useRouter } from "next/router";
import Link from "next/link";


function CheckoutPage() {
  const router = useRouter();
  
  return (
    <div className="max-w-xl mx-auto my-12">
      <h1 className="text-center text-4xl my-8">Checkout</h1>
      <form className="flex flex-col gap-6 ">
        <label className="flex flex-col gap-2">
          Full Name
          <input 
          required 
          type="text" 
          className="border-b px-4 py-2 outline-accent" />
        </label>

        <label className="flex flex-col gap-2">
          Email
          <input 
          required 
          type="email" 
          className="border-b px-4 py-2 outline-accent" />
        </label>

        <label className="flex flex-col gap-2">
          Delivery Address
          <textarea required className="border-b px-4 py-2 outline-accent"></textarea>
        </label>
        <label className="flex flex-col gap-2">
          Delivery Date
          <input 
          required 
          type="date" 
          className="border-b px-4 py-2 outline-accent" />
        </label>
        <div className="mt-6 flex items-center justify-between">
          <Link href="/shop/cart" className="text-sm hover:underline underline-offset-8 uppercase tracking-[0.2em]">
            Back to Cart
          </Link>

        <button onClick={() => router.push("/shop/confirmation")} type="button" className="w-fit py-4 px-8 text-sm uppercase tracking-[0.2em] transition border border-secondary-light hover:bg-accent hover:text-primary">
          Place Order
        </button>
        </div>
      </form>
    </div>
  );
}

export default CheckoutPage;
