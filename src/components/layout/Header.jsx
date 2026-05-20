import Link from "next/link"
import { HiOutlineShoppingBag } from "react-icons/hi2";

function Header() {
  return (
      <header className="flex flex-col items-center py-4 px-8 bg-primary text-secondary font-helvatica-neue">
        <h4 className="text-2xl py-8">stem.</h4>
        <nav>
          <ul className="flex gap-8 uppercase text-sm">
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
              <Link href="/shop/cart" className="flex item-center gap-2"><HiOutlineShoppingBag size={20}/>
              <span>cart (1)</span>
              </Link>
            </li>
          </ul>
        </nav>
      </header>

  );
}

export default Header;
