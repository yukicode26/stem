import Link from "next/link";
import { HiOutlineShoppingBag } from "react-icons/hi2";

function Header() {
  return (
    <header className="bg-primary px-6 py-5 text-secondary md:px-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between lg:flex-col">
        <Link href="/">
          <h2 className="text-4xl md:text-5xl">stem.</h2>
        </Link>
        {/* daisyUI */}
        <nav className="w-auto">
          <div className="navbar p-0 lg:mt-4">
            {/* Mobile menu */}
            <div className="ml-auto dropdown lg:hidden">
              <label tabIndex={0} className="btn btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </label>

              <ul
                tabIndex={0}
                className="menu dropdown-content absolute right-0 top-full z-10 mt-3 w-32 bg-primary p-4 text-sm"
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
                  <Link href="/shop/cart" className="flex items-center gap-2">
                    <HiOutlineShoppingBag size={20} />
                    <span>Cart</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Desktop menu */}
            <ul className="menu menu-horizontal hidden px-1 text-lg lg:flex ">
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
                <Link href="/journal" className="hover:bg-transparent text-accent">
                  Journal
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:bg-transparent hover:bg-transparent hover:text-accent">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/shop/cart" className="flex items-center gap-2 hover:bg-transparent hover:text-accent">
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
