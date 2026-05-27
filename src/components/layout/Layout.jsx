import Header from "./Header";
import Footer from "./Footer";
import { Manrope, DM_Serif_Display } from "next/font/google";

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-heading",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
});

function Layout(props) {
  return (
    <div className={`${manrope.variable} ${dmSerif.variable} flex flex-col min-h-screen`}>
      <Header />

      <div className="flex-1">
        {/* MAIN CONTENT WINDOW: "Layout doesn't know it's children in advance" */}
        {props.children}
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
