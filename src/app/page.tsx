
import HomePage from "./HomePage/page"
import AboutPage from "./About/page";
import Skills from "./Skills/page";
import Education from "./Education/page"
import Contact from "./Contact/page"
import Footer from "./Footer/footer"
import Projects from "../components/Projects/page"

export default function Home() {
  return (
   <>
   
   <HomePage/>
   <AboutPage/>
   <Skills/>
   <Education/>
   <Projects/>
   <Contact/>
   <Footer/>
   </>
  );
}
