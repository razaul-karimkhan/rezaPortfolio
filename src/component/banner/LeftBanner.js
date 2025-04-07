import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNextdotjs } from "react-icons/si";
import { useTypewriter, Cursor } from "react-simple-typewriter";


const LeftBanner = () => {
     const [text] = useTypewriter({
            words: ["Professional Coder.", "Full Stack Developer.", "UI Designer."],
            loop: true,
            typeSpeed: 20,
            deleteSpeed: 10,
            delaySpeed: 2000,
          });
   
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
           <div className="flex flex-col gap-5">
             <h4 className="text-lg font-normal">WELCOME TO MY WORLD</h4>
             <h1 className="text-6xl font-bold text-white">
               Hi, I'm {""}
               <span className="text-designColor capitalize">Razaul Karin</span>
             </h1>
             <h2 className="text-4xl font-bold text-white">
               a <span>{text}</span>
               <Cursor
                 cursorBlinking="false"
                 cursorStyle="|"
                 cursorColor="#ff014f"
               />
             </h2>
             <p className="text-base font-bodyFont leading-6 tracking-wide">
               An aimless life has no meaning. It rarely finds enthusiasm and
               energy. In fact, an aim is the sauce of life. It sustains the very
               spirit of existence. My aim is nothing extraordinary
             </p>
   
           </div>
           <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
       <div>
            <h2 className="text-base uppercase font-titleFont mb-4">
                Find me in
            </h2>
            <div className="flex gap-4">
            <span className="bannerIcon">
              <FaFacebookF />
            </span>
            <span className="bannerIcon">
              <FaTwitter />
            </span>
            <span className="bannerIcon">
              <FaLinkedinIn />
            </span>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiNextdotjs />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <SiFigma />
            </span>
          </div>
        </div>
       </div>
        
         </div>
  );
}

export default LeftBanner;
