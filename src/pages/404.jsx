import Link from "next/link";
import Image from "next/image";

function NotFoundPage() {
  return (
    <>
<div className="flex flex-col items-center justify-center min-h-screen px-8 py-8 lg:flex-row lg:gap-24">
  
  {/* Text */}
  <div className="text-center lg:text-left">
    <p className="mb-6 text-base uppercase tracking-[0.4em]">
      Error
    </p>

    <h1 className="leading-none text-32 md:text-40 lg:text-48">
      404
    </h1>

    <h2 className="max-w-2xl mt-6 text-4xl leading-tight md:text-5xl">
      Page not found.
    </h2>

    <p className="max-w-xl mt-8 text-lg leading-9 md:text-xl">
      The page you are looking for may have been moved or no longer exists.
    </p>

    <div className="mt-12">
      <Link
        href="/"
        className="px-10 py-5 text-lg transition duration-300 border border-s-secondary-light hover:bg-accent hover:text-primary"
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
