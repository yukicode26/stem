import Link from "next/link";
import Image from "next/image";

function NotFoundPage() {
  return (
    <>
<div className="flex min-h-screen flex-col items-center justify-center px-8 py-8 text-sub lg:flex-row lg:gap-24">
  
  {/* Text */}
  <div className="text-center lg:text-left">
    <p className="mb-6 text-base uppercase tracking-[0.4em] text-muted">
      Error
    </p>

    <h1 className="font-serif text-32 leading-none md:text-40 lg:text-48">
      404
    </h1>

    <h2 className="mt-6 max-w-2xl text-4xl leading-tight text-muted md:text-5xl">
      Page not found.
    </h2>

    <p className="mt-8 max-w-xl text-lg leading-9 text-muted md:text-xl">
      The page you are looking for may have been moved or no longer exists.
    </p>

    <div className="mt-12">
      <Link
        href="/"
        className="border border-sub px-10 py-5 text-lg transition duration-300 hover:bg-sub hover:text-main"
      >
        Return to Home
      </Link>
    </div>
  </div>

  {/* Image */}
  <div className="mt-16 lg:mt-0">
    <Image
      src="/images/notFound.webp"
      alt="Flower arrangement"
      width={1200}
      height={1200}
      loading="eager"
      className="h-auto w-[380px] md:w-[480px] lg:w-[560px]"
    />
  </div>

</div>
      </>
  );
}

export default NotFoundPage;
