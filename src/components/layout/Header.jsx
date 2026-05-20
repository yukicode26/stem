import Link from "next/link"
import { HiOutlineShoppingBag } from "react-icons/hi2";

function Header() {
  return (
      <header className="flex flex-col items-center py-4 px-8 bg-primary text-secondary font-helvatica-neue">
        <h4 className="text-2xl py-8">stem.</h4>
        <nav>
          <ul className="flex gap-8 uppercase text-sm">
            <li>
              <Link href="/" className="hover:text-accent">Home</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-accent">About</Link>
            </li>
            <li>
              <Link href="/shop" className="hover:text-accent">Shop</Link>
            </li>
            <li>
              <Link href="/journal" className="hover:text-accent">Journal</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-accent">Contact</Link>
            </li>
            <li>
              <Link href="/shop/cart" className="flex item-center gap-2 hover:text-accent"><HiOutlineShoppingBag size={20}/>
              <span>cart (1)</span>
              </Link>
            </li>
          </ul>
        </nav>
      </header>

  );
}

export default Header;
