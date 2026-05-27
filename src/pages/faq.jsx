import PageHeader from "@/components/common/PageHeader";
import faqItems from "@/data/faqItems";
import { useState } from "react";

function FaqPage() {
  // store current opened FAQ id
  const [openId, setOpenId] = useState(null);

  return (
    <>
      <PageHeader title="FAQ" />

      <main className="max-w-3xl px-6 py-16 mx-auto">
        <section className="mb-12 text-center">
          <h2 className="mt-4 text-3xl md:text-4xl">
            How can we help?
          </h2>

          <p className="max-w-xl mx-auto mt-5">
            Here are some common questions about our flowers, delivery, and orders.
          </p>
        </section>

        {/* FAQ list */}
          {faqItems.map((item) => (
            <article key={item.id} className="px-6 py-6 border-b">
              <button
              // Save clicked item id into openId
                onClick={() => setOpenId(openId === item.id ? null : item.id)}
                className="w-full text-left"
              >
                <p className="text-xl">
                  {item.question}
                </p>
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