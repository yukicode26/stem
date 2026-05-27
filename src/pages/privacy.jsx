import PageHeader from "@/components/common/PageHeader";

function PrivacyPage() {
  return (
    <>
      <PageHeader title="Privacy Policy" />
<div className="px-6 md:px-12 lg:px-24">
      <main className="max-w-3xl px-8 py-10 mx-auto my-8 border border-secondary-light md:my-12 md:px-14 md:py-14 lg:px-20">
        <section className="space-y-10">
          <div>
            <p>
              We respect your privacy and are committed to protecting your personal information.
            </p>

            <p className="mt-4">
              This website may collect limited personal information when you contact us, place an order, or subscribe to
              updates.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-xl tracking-wide md:text-2xl">Information We Collect</h2>
            <p>We may collect:</p>

            <ul className="mt-3 ml-5 space-y-2 list-disc">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Delivery address</li>
              <li>Messages submitted through contact forms</li>
            </ul>
          </div>

          <div>
            <h2 className="mb-3 text-2xl font-medium tracking-wide">How We Use Your Information</h2>
            <p>Your information may be used to:</p>

            <ul className="mt-3 ml-6 space-y-2 list-disc">
              <li>Process orders</li>
              <li>Respond to enquiries</li>
              <li>Improve our website and services</li>
              <li>Send updates related to your order</li>
            </ul>
          </div>

          <div>
            <h2 className="mb-3 text-2xl font-medium tracking-wide">Cookies</h2>
            <p>
              This website may use cookies and analytics tools to improve user experience and website performance.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-2xl font-medium tracking-wide">Third-Party Services</h2>
            <p>
              We may use trusted third-party services such as Google Analytics to help understand website traffic and
              usage.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-2xl font-medium tracking-wide">Data Security</h2>
            <p>
              We take reasonable steps to protect your personal information and keep it secure.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-2xl font-medium tracking-wide">Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us through the Contact page.
            </p>
          </div>
        </section>
      </main>
      </div>
    </>
  );
}

export default PrivacyPage;