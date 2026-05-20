import { useRouter } from "next/router";



function CheckoutPage() {
  const router = useRouter();
  return (
    <div className="max-w-xl mx-auto my-12">
      <h1 className="text-center">Checkout</h1>
      <form className="flex flex-col gap-6 ">
        <label className="flex flex-col gap-2">
          Full Name
          <input type="text" className="border-b py-2" />
        </label>

        <label className="flex flex-col gap-2">
          Email
          <input type="email" className="border-b py-2" />
        </label>

        <label className="flex flex-col gap-2">
          Delivery Address
          <textarea className="border-b py-2"></textarea>
        </label>
        <label className="flex flex-col gap-2">
          Delivery Date
          <input type="date" className="border-b py-2" />
        </label>

        <button onClick={() => router.push("/shop/confirmation")} type="button" className="w-fit py-3 px-6 border">
          Place Order
        </button>
      </form>
    </div>
  );
}

export default CheckoutPage;
