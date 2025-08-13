
import React from 'react';
import { GrLinkedin } from "react-icons/gr";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {

  return (
    <footer id="footer" className='bg-gray-800 text-white flex justify-between p-7 items-center p-4 flex-wrap'>

      <div className='flex flex-col items-center w-65'>
        <h4 className='font-bold'>Contect Us</h4>
        <div className="w-full">
          <input type="email" placeholder="Enter your Email*" />
        
        </div>
        <p >  <span className='font-bold sold'>Address:</span> Unnamed Road, Donde Kala, Donde Khurd, Chhattisgarh 493111</p>
      </div>

      <div className="flex flex-col items-center">
        <h1 className='text-2xl font-bold'>S.A APPAREL</h1>
        <p>Where Quality Meets Innovation.</p>
        <p>© 2025 Saadustu. All Rights Reserved.</p>
        <h4>Follow Us</h4>
        <div className='flex gap-5 p-2' >
          <a href="" target="_blank" rel="noopener noreferrer">
           <GrLinkedin />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <FaXTwitter />
          </a>
          
        </div>
      </div>

      <div className="rightFooter">
        <h4>Our Location</h4>
        <div id="map" style={{ width: "100%", height: "200px" }}></div>
      </div>

    </footer>
  );
};

export default Footer;