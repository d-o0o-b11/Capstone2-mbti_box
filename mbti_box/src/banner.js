import React from "react"
import img1 from "./images/cc.png"
import "./Step.css"

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};


const Banner = () => {
  
 

  return (
    
    
            
                <img src={process.env.PUBLIC_URL+img1} style={{width:"100%",height:"100%"}}/>
            

            
        
            
  );
};

export default Banner