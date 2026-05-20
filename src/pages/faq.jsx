import PageHeader from "@/components/common/PageHeader";
import faqItems from "@/data/faqItems";
import { useState } from "react";

function FaqPage() {
  // store current opened FAQ id
  const [openId, setOpenId] = useState(null);

  return (
    <>
      <PageHeader title="FAQ" />

      <main className="mx-auto max-w-3xl px-6 py-16">
        <section className="mb-12 text-center">
          <h1 className="mt-4 text-3xl md:text-4xl">
            How can we help?
          </h1>

          <p className="mx-auto mt-5 max-w-xl">
            Here are some common questions about our flowers, delivery, and orders.
          </p>
        </section>

        {/* FAQ list */}
          {faqItems.map((item) => (
            <article key={item.id} className="border-b px-6 py-6">
              <button
              // Save clicked item id into openId
                onClick={() => setOpenId(openId === item.id ? null : item.id)}
                className="w-full text-left"
              >
                <h2 className="text-xl">
                  {item.question}
                </h2>
              </button>
              {/* show answer if openId matches item.id */}
              {openId === item.id && (
                <p className="mt-5">{item.answer}</p>
              )}
            </article>
          ))}
      </main>
    </>
  );
}

export default FaqPage;