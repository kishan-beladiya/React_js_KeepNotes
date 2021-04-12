import React from "react";

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <>
      <div className="footer">
          <span>Created By Kishan Beladiya |{/*copyright*/} &#169; {year} All right reserved.</span>
      </div>
    </>
  );
};

export default Footer;
