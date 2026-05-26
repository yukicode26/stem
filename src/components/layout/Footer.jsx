import Link from "next/link";
import { FaInstagram, FaPinterestP } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-accent-light text-secondary py-4 px-4">
      <div className="mx-auto max-w-6xl px-4 py-12">
        {/* Main footer layout */}
        <div className="grid gap-6 md:grid-cols-5">
          {/* Brand */}
          <div>
            <Link href={"/"}>
              <h2 className="text-4xl tracking-wide">stem.</h2>
            </Link>
            <p className="mt-2 max-w-xs text-sm">To make every moment bloom</p>
          </div>

          {/* Empty spacer column */}
          <div className="hidden md:block"></div>

          {/* Shop links */}
          <div>
            <h3 className="text-lg font-semibold">Shop</h3>
            <ul className="mt-5 space-y-3 text-sm text-secondary">
              <li>
                <Link href="/shop" className="hover:text-secondary-light">
                  All Flowers
                </Link>
              </li>
            </ul>
          </div>

          {/* Help links */}
          <div>
            <h3 className="text-lg font-semibold">Help</h3>
            <ul className="mt-5 space-y-3 text-sm text-secondary">
              <li>
                <Link href="/faq" className="hover:text-white">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/delivery" className="hover:text-white">
                  Delivery Info
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold">Contact</h3>
            <ul className="mt-5 space-y-3 text-sm text-secondary">
              <li>
                <a href="mailto:hello@casaflorista.com.au" className="hover:text-white">
                  hello@stem.com.au
                </a>
              </li>
              <li>Melbourne, Australia</li>
              <li>
                <div className="flex gap-5 text-3xl">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition hover:opacity-70"
                    aria-label="instagram"
                  >
                    <FaInstagram />
                  </a>

                  <a
                    href="https://pinterest.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition hover:opacity-70"
                    aria-label="pinterest"
                  >
                    <FaPinterestP />
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-10 border-t border-white/20 pt-6 text-center text-sm text-secondary">
          © 2026 stem. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
