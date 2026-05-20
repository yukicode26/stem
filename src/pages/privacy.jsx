import PageHeader from "@/components/common/PageHeader";

function PrivacyPage() {
  return (
    <>
      <PageHeader title="Privacy Policy" />

      <main className="mx-auto max-w-3xl px-6 py-16 text-sub md:px-8">
        <section className="space-y-10 leading-8">
          <div>
            <p className="text-muted">
              We respect your privacy and are committed to protecting your personal information.
            </p>

            <p className="mt-4 text-muted">
              This website may collect limited personal information when you contact us, place an order, or subscribe to
              updates.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-lg font-medium tracking-wide">Information We Collect</h2>
            <p className="text-muted">We may collect:</p>

            <ul className="mt-3 ml-6 list-disc space-y-2 text-muted">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Delivery address</li>
              <li>Messages submitted through contact forms</li>
            </ul>
          </div>

          <div>
            <h2 className="mb-3 text-lg font-medium tracking-wide">How We Use Your Information</h2>
            <p className="text-muted">Your information may be used to:</p>

            <ul className="mt-3 ml-6 list-disc space-y-2 text-muted">
              <li>Process orders</li>
              <li>Respond to enquiries</li>
              <li>Improve our website and services</li>
              <li>Send updates related to your order</li>
            </ul>
          </div>

          <div>
            <h2 className="mb-3 text-lg font-medium tracking-wide">Cookies</h2>
            <p className="text-muted">
              This website may use cookies and analytics tools to improve user experience and website performance.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-lg font-medium tracking-wide">Third-Party Services</h2>
            <p className="text-muted">
              We may use trusted third-party services such as Google Analytics to help understand website traffic and
              usage.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-lg font-medium tracking-wide">Data Security</h2>
            <p className="text-muted">
              We take reasonable steps to protect your personal information and keep it secure.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-lg font-medium tracking-wide">Contact Us</h2>
            <p className="text-muted">
              If you have any questions about this Privacy Policy, please contact us through the Contact page.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

export default PrivacyPage;