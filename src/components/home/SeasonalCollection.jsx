import Image from "next/image";
import Link from "next/link";

function SeasonalCollection() {
  return (
    <>
      {/* daisyUI carousel*/}
      <section className="px-6 py-16 md:px-12 lg:px-36 lg:py-24">
        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl">Seasonal Collection</h2>
          </div>

          <Link href="/shop" className="text-sm uppercase tracking-[0.2em] hover:underline hover:underline-offset-8 hover:decoration-secondary-light md:text-sm">
            View All
          </Link>
        </div>

        <div className="w-full gap-6 overflow-x-auto carousel carousel-center md:gap-6">
          <div className="carousel-item">
            <Image
              src="/images/shop/soft-rose.webp"
              alt="Seasonal flowers"
              width={340}
              height={500}
              className="object-cover w-64 h-96 md:h-125 md:w-85"
            />
          </div>

          <div className="carousel-item">
            <Image
              src="/images/shop/autumn-tones.webp"
              alt="Seasonal flowers"
              width={340}
              height={500}
              className="object-cover w-64 h-96 md:h-125 md:w-85"
            />
          </div>

          <div className="carousel-item">
            <Image
              src="/images/shop/winter-light.webp"
              alt="Seasonal flowers"
              width={340}
              height={500}
              className="object-cover w-64 h-96 md:h-125 md:w-85"
            />
          </div>

          <div className="carousel-item">
            <Image
              src="/images/shop/spring-air.webp"
              alt="Seasonal flowers"
              width={340}
              height={500}
              className="object-cover w-64 h-96 md:h-125 md:w-85"
            />
          </div>

          <div className="carousel-item">
            <Image
              src="/images/shop/summer-meadow.webp"
              alt="Seasonal flowers"
              width={340}
              height={500}
              className="object-cover w-64 h-96 md:h-125 md:w-85"
            />
          </div>

          <div className="carousel-item">
            <Image
              src="/images/shop/golden-leaves.webp"
              alt="Seasonal flowers"
              width={340}
              height={500}
              className="object-cover w-64 h-96 md:h-125 md:w-85"
            />
          </div>

          <div className="carousel-item">
            <Image
              src="/images/shop/rainy-morning.webp"
              alt="Seasonal flowers"
              width={340}
              height={500}
              className="object-cover w-64 h-96 md:h-125 md:w-85"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default SeasonalCollection;
