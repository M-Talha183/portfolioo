
import AboutPage from "../components/About";
import Skills from "../components/Skills";
import Education from "../components/Education"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import Projects from "../components/Project"
import HeroSection from "../components/Hero";

export default function Home() {
  return (
   <>
   <HeroSection/>
   
   <AboutPage/>
   <Skills/>
   <Education/>
   <Projects/>
   <Contact/>
    <Footer/>
   </>
  );
}
