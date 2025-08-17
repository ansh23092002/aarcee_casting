import React from "react";
import { GrLinkedin } from "react-icons/gr";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer
      id="footer"
      className="bg-gray-800 text-white flex justify-between p-7 items-center p-4 flex-wrap"
    >
      <div className="flex flex-col items-center w-65">
        <h4 className="font-bold">Contect Us</h4>
        <div className="w-full">
          <input type="email" placeholder="Enter your Email*" />
        </div>
        <p>
          {" "}
          <span className="font-bold sold">Address:</span> Unnamed Road, Donde
          Kala, Donde Khurd, Chhattisgarh 493111
        </p>
      </div>

      <div className="flex flex-col items-center">
        <h1 className="text-2xl font-bold">AarCee casting</h1>
        <p>Where Quality Meets Innovation.</p>
        <p>© 2025 Saadustu. All Rights Reserved.</p>
        <h4>Follow Us</h4>
        <div className="flex gap-5 p-2">
          <a href="" target="_blank" rel="noopener noreferrer">
            <GrLinkedin />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <FaXTwitter />
          </a>
        </div>
      </div>

      <div className=" flex flex-col items-center w-65 gap-4">
        <h4>Our Location</h4>
        <div style={{ width: "100%", height: "200px" }} className="rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3716.8220429165617!2d81.74713957526457!3d21.31804698040468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28e9ce66b757cf%3A0x268f6fc2e66f823c!2sAar%20cee%20casting%20industries%20(Riddhi%20Ispat%20Industries)!5e0!3m2!1sen!2sin!4v1755411878147!5m2!1sen!2sin"
            width="250"
            height="200"
            style={{border:0}}
            // allowfullscreen=""
            loading="lazy"
            title="Google Map Location"
                       
          ></iframe>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
