import React from "react"
import img1 from "./images/cc.jpg" //글자 넣어야함
import "./Step.css"


const Mobanner = () => {
  
 

  return (
    
    
            <div className="abc">
                <img src={process.env.PUBLIC_URL+img1} style={{width:"100%",height:"100%"}}/>
            </div>
        
            
  );
};

export default Mobanner