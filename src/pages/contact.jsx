import Image from "next/image";

import {
  HiOutlineEnvelope,
  HiOutlineMapPin,
  HiOutlinePhone,
} from "react-icons/hi2";

import PageHeader from "@/components/common/PageHeader";

function ContactPage() {
  return (
    <>
      <PageHeader title="Contact" />

      <main className="px-6 py-16">
        <section className="mx-auto grid max-w-5xl gap-12 border border-secondary-light p-8 md:grid-cols-2 md:p-12">

          {/* Left Content */}
          <div>
            <h2 className="mb-10 text-4xl">
              Get in Touch
            </h2>

            <div className="space-y-10">

              {/* Email */}
              <div className="flex items-start gap-5 pt-8">
                <HiOutlineEnvelope className="mt-1 text-4xl text-accent" />

                <div>
                  <h3 className="mb-2 text-lg font-medium">
                    Email
                  </h3>

                  <p className="leading-7 text-muted">
                    hello@stem.com
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-5">
                <HiOutlinePhone className="mt-1 text-4xl text-accent" />

                <div>
                  <h3 className="mb-2 text-lg font-medium">
                    Phone
                  </h3>

                  <p className="leading-7 text-muted">
                    +61 400 123 456
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-5">
                <HiOutlineMapPin className="mt-1 text-4xl text-accent" />

                <div>
                  <h3 className="mb-2 text-lg font-medium">
                    Studio
                  </h3>

                  <p className="leading-7 text-muted">
                    Melbourne, Australia
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Image */}
          <div className="flex items-center justify-center">
            <div className="overflow-hidden bg-cream">
              <Image
                src="/images/contact.webp"
                alt="Flower arrangement"
                width={500}
                height={600}
                className="aspect-4/5 object-cover"
              />
            </div>
          </div>

        </section>
      </main>
    </>
  );
}

export default ContactPage;