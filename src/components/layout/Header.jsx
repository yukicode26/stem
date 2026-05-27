import Link from "next/link";
import { HiOutlineShoppingBag } from "react-icons/hi2";

function Header() {
  return (
    <header className="px-6 py-5 bg-primary text-secondary md:px-8">
      <div className="flex items-center justify-between mx-auto max-w-7xl lg:flex-col">
        <Link href="/" aria-label="Home page">
          <h2 className="text-4xl transition duration-300 hover:opacity-70 md:text-5xl">stem.</h2>
        </Link>
        {/* daisyUI navbar*/}
        <nav className="w-auto">
          <div className="p-0 navbar lg:mt-4">
            {/* Mobile menu */}
            <div className="ml-auto dropdown lg:hidden">
              <label 
              tabIndex={0} 
              className="btn btn-ghost" 
              aria-label="Open menu">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </label>

              <ul
                tabIndex={0}
                className="absolute right-0 z-10 w-32 p-4 mt-3 text-sm menu dropdown-content top-full bg-primary"
              >
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/shop">Shop</Link>
                </li>
                <li>
                  <Link href="/journal">Journal</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
                <li>
                  <Link href="/shop/cart" className="flex items-center gap-2" aria-label="Shopping cart">
                    <HiOutlineShoppingBag size={20} />
                    <span>Cart</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Desktop menu */}
            <ul className="hidden px-1 text-lg menu menu-horizontal lg:flex">
              <li>
                <Link href="/" className="hover:bg-transparent hover:text-accent">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:bg-transparent hover:text-accent">
                  About
                </Link>
              </li>
              <li>
                <Link href="/shop" className="hover:bg-transparent hover:text-accent">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/journal" className="hover:bg-transparent hover:text-accent">
                  Journal
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:bg-transparent hover:text-accent">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/shop/cart" className="flex items-center gap-2 hover:bg-transparent hover:text-accent" aria-label="Shopping cart">
                  <HiOutlineShoppingBag size={20} />
                  <span>Cart</span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
