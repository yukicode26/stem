import Image from "next/image";
import Link from "next/link";

function SeasonalCollection() {
  return (
    <>
      {/* daisyUI */}
      <section className="px-30 py-24">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="mt-4 font-serif text-4xl text-sub">Seasonal Collection</h2>
          </div>

          <Link href="/shop" className="text-sm uppercase tracking-[0.2em] text-muted hover:text-sub">
            View All
          </Link>
        </div>

        <div className="carousel carousel-center w-full gap-6 overflow-x-auto">
          <div className="carousel-item">
            <Image
              src="/images/shop/soft-rose.png"
              alt="Seasonal flowers"
              width={340}
              height={500}
              className="object-cover"
            />
          </div>

          <div className="carousel-item">
            <Image
              src="/images/shop/autumn-tones.png"
              alt="Seasonal flowers"
              width={340}
              height={500}
              className="object-cover"
            />
          </div>

          <div className="carousel-item">
            <Image
              src="/images/shop/winter-light.png"
              alt="Seasonal flowers"
              width={340}
              height={500}
              className="object-cover"
            />
          </div>

          <div className="carousel-item">
            <Image
              src="/images/shop/spring-air.png"
              alt="Seasonal flowers"
              width={340}
              height={500}
              className="object-cover"
            />
          </div>

          <div className="carousel-item">
            <Image
              src="/images/shop/summer-meadow.png"
              alt="Seasonal flowers"
              width={340}
              height={500}
              className="object-cover"
            />
          </div>

          <div className="carousel-item">
            <Image
              src="/images/shop/golden-leaves.png"
              alt="Seasonal flowers"
              width={340}
              height={500}
              className="object-cover"
            />
          </div>

          <div className="carousel-item">
            <Image
              src="/images/shop/rainy-morning.png"
              alt="Seasonal flowers"
              width={340}
              height={500}
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default SeasonalCollection;
