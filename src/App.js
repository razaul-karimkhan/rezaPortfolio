import Banner from "./component/banner/Banner";
import Features from "./component/features/Features";
import Nabvar from "./component/navbar/Nabvar";
import React from "react";
import Projects from "./component/projects/Projects";
import Resume from "./component/resume/Resume";
import Testimonial from "./component/testimonial/Testimonial";
import Contact from "./component/contact/Contact";
import Footer from "./component/footer/Footer";
import FooterBottom from "./component/footer/FooterBottom";



function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
      
      <Nabvar/>
      <div className="max-w-screen-xl mx-auto"> 
      <Banner/>
      <Features/>
      <Projects/>
      <Resume/>
      <Testimonial/>
      <Contact/>
      <Footer/>
      <FooterBottom/>
      </div>
    </div>
  );
}

export default App;
