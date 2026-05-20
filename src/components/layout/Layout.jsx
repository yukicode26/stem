import Header from "./Header"
import Footer from "./Footer"
import { Inter } from "next/font/google"

const inter = Inter({
  subsets: ["latin"],
  weight: [ '400', '500', '600','700'],
  style: ['normal'],
});

function Layout(props) {
  return (
    <div className={`${inter.className} flex flex-col min-h-screen`}>
      <Header />

      <main className="flex-1">
      {/* MAIN CONTENT WINDOW: "Layout doesn't know it's children in advance" */}
      {props.children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout

