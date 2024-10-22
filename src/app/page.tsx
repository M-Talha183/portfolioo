import Image from "next/image";
import Navbar from "./Navbar/page"
import HomePage from "./HomePage/page"
import AboutPage from "./About/page";
import Skills from "./Skills/page";
import Education from "./Education/page"
import Contact from "./Contact/page"

export default function Home() {
  return (
   <>
   
   <HomePage/>
   <AboutPage/>
   <Skills/>
   <Education/>
   <Contact/>
   </>
  );
}
