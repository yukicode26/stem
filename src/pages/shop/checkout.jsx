import { useRouter } from "next/router";
import Link from "next/link";


function CheckoutPage() {
  const router = useRouter();
  
  return (
    <div className="px-6 py-12 md:px-10 md:py-16">
    <div className="max-w-xl p-8 mx-auto my-12 border border-secondary-light">
      <h1 className="my-8 text-4xl text-center">Checkout</h1>
      <form className="flex flex-col gap-6 ">
        <label className="flex flex-col gap-2">
          Full Name
          <input 
          required 
          type="text" 
          className="px-4 py-2 border-b outline-accent" />
        </label>

        <label className="flex flex-col gap-2">
          Email
          <input 
          required 
          type="email" 
          className="px-4 py-2 border-b outline-accent" />
        </label>

        <label className="flex flex-col gap-2">
          Delivery Address
          <textarea required className="px-4 py-2 border-b outline-accent"></textarea>
        </label>
        <label className="flex flex-col gap-2">
          Delivery Date
          <input 
          required 
          type="date" 
          className="px-4 py-2 border-b outline-accent" />
        </label>
        <div className="flex items-center justify-between mt-6">
          <Link href="/shop/cart" className="text-sm hover:underline underline-offset-8 uppercase tracking-[0.2em]">
            Back to Cart
          </Link>

        <button onClick={() => router.push("/shop/confirmation")} type="submit" className="w-fit py-4 px-8 text-sm uppercase tracking-[0.2em] transition border border-secondary-light hover:bg-accent hover:text-primary">
          Place Order
        </button>
        </div>
      </form>
    </div>
    </div>
  );
}

export default CheckoutPage;
