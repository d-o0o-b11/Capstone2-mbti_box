import React from "react";
import "./Step.css";
import "./fonts/font.css";

const Footer = () => {
  const thisYear = () => {
    const year = new Date().getFullYear();
    return year;
  };

  return (
    <div className="footer">

            <p>
                <span>&copy; {thisYear()}</span>
            </p>
 
    </div>
  );
};

export default Footer;
