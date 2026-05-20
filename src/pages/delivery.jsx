import Image from "next/image";

import {
  HiOutlineMapPin,
  HiOutlineClock,
  HiOutlineTruck,
} from "react-icons/hi2";

import PageHeader from "@/components/common/PageHeader";

function DeliveryPage() {
  return (
    <>
      <PageHeader title="Delivery Info" />

      <main className="px-6 py-16">
        <section className="mx-auto grid max-w-5xl gap-12 p-8 md:grid-cols-2 md:p-12">

          {/* Left Content */}
          <div>

            <div className="space-y-10">

              {/* Delivery Areas */}
              <div className="flex items-start gap-5">
                <HiOutlineMapPin className="mt-1 text-4xl text-sage-dark" />

                <div>
                  <h3 className="mb-2 text-lg font-medium">
                    Delivery Areas
                  </h3>

                  <p className="leading-7 text-muted">
                    We deliver across Melbourne and surrounding suburbs.
                  </p>
                </div>
              </div>

              {/* Delivery Times */}
              <div className="flex items-start gap-5">
                <HiOutlineClock className="mt-1 text-4xl text-sage-dark" />

                <div>
                  <h3 className="mb-2 text-lg font-medium">
                    Delivery Times
                  </h3>

                  <p className="leading-7 text-muted">
                    Same day delivery for orders placed before 2pm.
                  </p>
                </div>
              </div>

              {/* Delivery Fees */}
              <div className="flex items-start gap-5">
                <HiOutlineTruck className="mt-1 text-4xl text-sage-dark" />

                <div>
                  <h3 className="mb-2 text-lg font-medium">
                    Delivery Fees
                  </h3>

                  <p className="leading-7 text-muted">
                    Flat rate of $25. Free delivery on orders over $70.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Image */}
          <div className="flex items-center justify-center">
            <div className="overflow-hidden  bg-cream">
              <Image
                src="/images/delivery.png"
                alt="Flower bouquet"
                width={500}
                height={600}
                className="h-full object-cover"
              />
            </div>
          </div>

        </section>
      </main>
    </>
  );
}

export default DeliveryPage;