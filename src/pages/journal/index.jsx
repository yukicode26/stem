import PageHeader from "@/components/common/PageHeader";
import Link from "next/link";
import journalItems from "@/data/journalItems";
import Image from "next/image";

function JournalPage() {
  return (
    <>
      <PageHeader title="Journal" />

      <main className="mx-auto max-w-6xl px-6 py-16">
        <section className="mb-14 text-center">
          <h1 className="mt-4 text-3xl md:text-4xl">
            Flower notes and seasonal stories
          </h1>
        </section>

        <section className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {journalItems.map((item) => (
            <article key={item.id} className="group border p-6">
              <Link href={`/journal/${item.id}`}>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={800}
                  height={1000}
                  className="aspect-[4/5] w-full object-cover transition duration-300 group-hover:opacity-80"
                />

                <p className="mt-5 text-sm text-muted">
                  {item.date}
                </p>

                <h2 className="mt-3 text-2xl font-light leading-snug">
                  {item.title}
                </h2>

                <p className="mt-4 line-clamp-3 leading-7 text-muted">
                  {item.content}
                </p>

                <span className="mt-6 inline-block text-sm uppercase tracking-[0.2em] underline underline-offset-4">
                  Read more
                </span>
              </Link>
            </article>
          ))}
        </section>
      </main>
    </>
  );
}

export default JournalPage;