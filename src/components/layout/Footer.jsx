import Link from "next/link";
import { FaInstagram, FaPinterestP } from "react-icons/fa";

function Footer() {
  return (
    <footer className="px-4 py-4 bg-accent-light text-secondary">
      <div className="max-w-6xl px-4 py-12 mx-auto">
        {/* Main footer layout */}
        <div className="grid gap-6 md:grid-cols-5">
          {/* Brand */}
          <div>
            <Link href={"/"}>
              <h2 className="inline-flex text-4xl tracking-wide transition duration-300 hover:scale-110 hover:opacity-70">stem.</h2>
            </Link>
            <p className="max-w-xs mt-2 text-sm">To make every moment bloom</p>
          </div>

          {/* Empty spacer column */}
          <div className="hidden md:block"></div>

          {/* Shop links */}
          <div>
            <h3 className="text-lg font-semibold">Shop</h3>
            <ul className="mt-5 space-y-3 text-sm text-secondary">
              <li>
                <Link href="/shop" className="inline-flex transition duration-300 hover:scale-110 hover:opacity-70">
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
                <Link href="/faq" className="inline-flex transition duration-300 hover:scale-110 hover:opacity-70">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/delivery" className="inline-flex transition duration-300 hover:scale-110 hover:opacity-70">
                  Delivery Info
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="inline-flex transition duration-300 hover:scale-110 hover:opacity-70">
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
                <a href="mailto:hello@stem.com.au" className="inline-flex transition duration-300 hover:scale-110 hover:opacity-70">
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
                    className="inline-flex transition duration-300 hover:scale-110 hover:opacity-70"
                    aria-label="Instagram"
                  >
                    <FaInstagram />
                  </a>

                  <a
                    href="https://pinterest.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex transition duration-300 hover:scale-110 hover:opacity-70"
                    aria-label="Pinterest"
                  >
                    <FaPinterestP />
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="pt-6 mt-10 text-sm text-center border-t border-white/20 text-secondary">
          © 2026 stem. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
