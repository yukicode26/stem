import Link from "next/link";
import { HiOutlineShoppingBag, HiOutlineSun, HiOutlineMoon } from "react-icons/hi2";
import { useState } from "react";

function Header() {
  const [isDark, setIsDark] = useState(false);

  function handleThemeChange() {
    const nextTheme = !isDark;

    setIsDark(nextTheme);

    if (nextTheme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }

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
              <label tabIndex={0} className="btn btn-ghost bg-transparent shadow-none border-transparent hover:text-white hover:scale-105" aria-label="Open menu">
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
                className="absolute right-0 z-10 w-32 p-4 mt-3 text-sm menu dropdown-content top-full bg-transparent items-center"
              >
                <li className="hover:scale-105 transition">
                  <Link className="bg-transparent" href="/">Home</Link>
                </li>
                <li className="hover:scale-105 transition">
                  <Link className="bg-transparent" href="/about">About</Link>
                </li>
                <li className="hover:scale-105 transition">
                  <Link className="bg-transparent" href="/shop">Shop</Link>
                </li>
                <li className="hover:scale-105 transition">
                  <Link className="bg-transparent" href="/journal">Journal</Link>
                </li>
                <li className="hover:scale-105 transition">
                  <Link className="bg-transparent" href="/contact">Contact</Link>
                </li>
                <li className="hover:scale-105 transition">
                  <Link className="bg-transparent flex items-center gap-2" href="/shop/cart" aria-label="Shopping cart">
                    <HiOutlineShoppingBag size={20} />
                    <span>Cart</span>
                  </Link>
                </li>
              </ul>
                              {/* daisyUI Dark mode */}
                <label className="swap swap-rotate cursor-pointer rounded-none bg-transparent p-3 hover:bg-transparent">
                  {/* this hidden checkbox controls the state */}
                  <input type="checkbox" checked={isDark} onChange={handleThemeChange} aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}/>

                  {/* sun icon */}
                  <span className="swap-on text-xl"><HiOutlineSun /></span>
                  {/* moon icon */}
                  <span className="swap-off text-xl"><HiOutlineMoon /></span>
                </label>
            </div>

            {/* Desktop menu */}
            <ul className="hidden px-1 text-lg menu menu-horizontal lg:flex">
              <li>
                <Link href="/" className="hover:bg-transparent hover:scale-105 transition">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:bg-transparent hover:scale-105 transition">About</Link>
              </li>
              <li>
                <Link href="/shop" className="hover:bg-transparent hover:scale-105 transition">Shop</Link>
              </li>
              <li>
                <Link href="/journal" className="hover:bg-transparent hover:scale-105 transition">Journal</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:bg-transparent hover:scale-105 transition">Contact</Link>
              </li>
              <li>
                <Link
                  href="/shop/cart"
                  className="flex items-center gap-2 hover:bg-transparent hover:scale-105 transition"
                  aria-label="Shopping cart"
                >
                  <HiOutlineShoppingBag size={20} />
                  <span>Cart</span>
                </Link>
              </li>
              <li>
                {/* daisyUI dark mode */}
                <label className="swap swap-rotate bg-transparent hover:scale-105 transition">
                  <input 
                  type="checkbox" 
                  checked={isDark} 
                  onChange={handleThemeChange}
                  aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"} />

                  <HiOutlineSun className="swap-on h-6 w-6" />

                  <HiOutlineMoon className="swap-off h-6 w-6" />
                </label>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
