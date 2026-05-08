import React from "react";
import logo from "../assets/Logos and Favicons/logo.png";
import facebookicon from "../assets/Logos and Favicons/facebook.png";
import instagramicon from "../assets/Logos and Favicons/instagram.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <footer className="relative min-h-[33vh] flex flex-col">
      <div
        className="bg-zinc-900 flex items-center justify-center"
        style={{ height: "33%" }}
      >
        <div className="text-white text-center bg-black p-4 w-80 mt-5 ml-5 shadow-lg">
          <h1
            className="text-3xl font-semibold"
            style={{ fontFamily: "Bookman Old Style, serif" }}
          >
            Get in Touch
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-screen bg-[#C5713A]">
        {/* Logo Column */}
        <div className="flex flex-col items-center justify-center -translate-y-10">
          <img src={logo} alt="Logo" className="w-80 h-auto" />
          <div className="text-white text-sm -mt-4 text-center -translate-y-12">
            © {new Date().getFullYear()} Designed By admirelb. All rights
            reserved.
          </div>
        </div>

        {/* Form Column */}
        <div className="flex items-center justify-center">
          <div className="w-80 max-w-xs bg-black p-4 ml-1 shadow-lg -translate-y-7">
            <form
              action="https://fabform.io/f/{form-id}"
              method="post"
              className="space-y-6 w-full"
            >
              <input
                className="w-full p-2 rounded border-b border-dashed bg-black text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                type="text"
                placeholder="Name"
                name="name"
              />
              <input
                className="w-full p-2 rounded bg-black border-b border-dashed text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                type="email"
                placeholder="Email"
                name="email"
              />
              <input
                className="w-full p-2 rounded bg-black border-b border-dashed text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                type="text"
                placeholder="Message"
                name="_subject"
              />
              <div className="flex justify-center">
                <button className="border-orange-500 border text-white hover:bg-orange-700 py-2 px-4 rounded-md shadow-md transition duration-300">
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Location Column */}
        <div className="flex flex-col items-start justify-start p-4 text-white text-sm space-y-4">
          <a
            href="https://www.google.com/maps/place/Khaldeh,+Lebanon"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:underline"
          >
            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-xl" />
            <span className="text-lg font-semibold">Naameh, Lebanon</span>
          </a>

          <a
            href="https://wa.me/96103730627"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:underline"
          >
            <FontAwesomeIcon icon={faPhone} className="text-xl" />
            <span className="text-lg">+961 03 730 627</span>
          </a>

          <a
            href="mailto:info@spicyfoodlb.com"
            className="flex items-center space-x-2 hover:underline"
          >
            <FontAwesomeIcon icon={faEnvelope} className="text-xl" />
            <span className="text-lg font-semibold">info@spicyfoodlb.com</span>
          </a>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={facebookicon}
                alt="Facebook"
                className="w-8 h-8 hover:scale-110"
              />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={instagramicon}
                alt="Instagram"
                className="w-8 h-8 hover:scale-110"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
