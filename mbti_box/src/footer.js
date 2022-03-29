import React from "react";
import "./Step.css";

const Footer = () => {
  const thisYear = () => {
    const year = new Date().getFullYear();
    return year;
  };

  return (
    <div className="footer">
            <nav>
                <a href="https://www.naver.com/" target="_blank">Naver</a> |
                <a href="https://www.daum.net/" tager="_blank">Daum</a>
            </nav>

            <p>
                <span>저자: 땡땡이</span><br/>
                <span>이메일: 메일@메일</span><br/>
                <span>&copy; {thisYear()}</span>

            </p>
        
      
    </div>
  );
};

export default Footer;
