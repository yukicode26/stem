import { useRouter } from "next/router";
import journalItems from "@/data/journalItems";
import Link from "next/link";
import Image from "next/image";

function JournalId() {
  const router = useRouter(); 
  const journalId = router.query.journalId;
  // Find the journal item with the matching id
  const journal = journalItems.find(
    (item)=>item.id===journalId
  );
    // Prevent undefined error
  if (!journal) {
  return <p>Loading...</p>;
  }

  return (
    <>
  <main className="max-w-3xl px-6 py-16 mx-auto">
    <p className="text-sm uppercase tracking-[0.3em]">{journal.date}</p>
    <h1 className="mt-4 text-4xl font-light leading-tight md:text-5xl">{journal.title}</h1>
    <Image
      src={journal.image}
      alt={journal.title}
      width={1200}
      height={1500}
      className="mt-10 aspect-[4/5] w-full object-cover"
    />
    <p className="mt-10 leading-8">{journal.content}</p>
    <Link
      href="/journal"
      className="mt-12 inline-block text-sm uppercase tracking-[0.2em] hover:underline hover:underline-offset-4"
    >
      Back to Journal
    </Link>
  </main>
    </>
  );
}

export default JournalId
