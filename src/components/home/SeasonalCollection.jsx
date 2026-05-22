import Image from "next/image";
import Link from "next/link";

function SeasonalCollection() {
  return (
    <>
      {/* daisyUI */}
      <section className="px-36 py-24">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="mt-4 text-4xl text-sub">Seasonal Collection</h2>
          </div>

          <Link href="/shop" className="text-sm uppercase tracking-[0.2em] hover:underline hover:underline-offset-8 hover:decoration-secondary-light">
            View All
          </Link>
        </div>

        <div className="carousel carousel-center w-full gap-6 overflow-x-auto">
          <div className="carousel-item">
            <Image
              src="/images/shop/soft-rose.webp"
              alt="Seasonal flowers"
              width={340}
              height={500}
              className="object-cover"
            />
          </div>

          <div className="carousel-item">
            <Image
              src="/images/shop/autumn-tones.webp"
              alt="Seasonal flowers"
              width={340}
              height={500}
              className="object-cover"
            />
          </div>

          <div className="carousel-item">
            <Image
              src="/images/shop/winter-light.webp"
              alt="Seasonal flowers"
              width={340}
              height={500}
              className="object-cover"
            />
          </div>

          <div className="carousel-item">
            <Image
              src="/images/shop/spring-air.webp"
              alt="Seasonal flowers"
              width={340}
              height={500}
              className="object-cover"
            />
          </div>

          <div className="carousel-item">
            <Image
              src="/images/shop/summer-meadow.webp"
              alt="Seasonal flowers"
              width={340}
              height={500}
              className="object-cover"
            />
          </div>

          <div className="carousel-item">
            <Image
              src="/images/shop/golden-leaves.webp"
              alt="Seasonal flowers"
              width={340}
              height={500}
              className="object-cover"
            />
          </div>

          <div className="carousel-item">
            <Image
              src="/images/shop/rainy-morning.webp"
              alt="Seasonal flowers"
              width={340}
              height={500}
              className="aspect-4/5 h-auto object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default SeasonalCollection;
