import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div
      className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 lgl:p-8
    rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center"
    >
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg "
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Razaul Karim</h3>
        <p className="text-lg font-normal text-gray-400">
          MERN STACK DEVELOPER
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          My name is razaul karim i am a website developer. My dream to be a
          successful freelancer.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+8801742389024</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email:{" "}
          <span className="text-lightText">razaulkarim19725@gmail.com</span>
        </p>
      </div>
      <div className="text-base uppercase font-titleFont mb-4">
        <h2>FIND ME IN</h2>
      </div>
      <div className="flex gap-4">
        <span className="bannerIcon">
          <a
            href="https://www.facebook.com/profile.php?id=100005522324826"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#4267B2", fontSize: "2rem" }}
          >
            <FaFacebookF />
          </a>
        </span>
        <span className="bannerIcon">
          <a
            href="https://twitter.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#1DA1F2", fontSize: "2rem" }}
          >
            <FaTwitter />
          </a>
        </span>
        <span className="bannerIcon">
          <a
            href="https://www.linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#0077B5", fontSize: "2rem" }}
          >
            <FaLinkedinIn />
          </a>
        </span>
      </div>
    </div>
  );
};

export default ContactLeft;
