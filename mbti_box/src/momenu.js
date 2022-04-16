import "./menu.css"
import "./Step.css";
import img1 from "./images/name.jpg"
import {Link} from "react-router-dom";
import "./fonts/font.css";
import React, { useState, useEffect } from 'react';
import { Menu, Button } from 'antd';
import styled from 'styled-components';
import { BrowserView, MobileView } from 'react-device-detect';
import { MenuOutlined, MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';


const MenuList = styled.div`
  display: flex;
  justify-content: space-between;
`;

const NavTop = styled.div`
  display: flex;
  justify-content: flex-end;
  
`;

const Momenu = () => {

  const [toggleMenu, setToggleMenu] = useState(false)
  const [toggleBar, setToggleBar] = useState(true)

  const toggleChange = () => {
    setToggleMenu(!toggleMenu)
    setToggleBar(!toggleBar)
  }

  const onMenuClick = () => {
    setToggleMenu(!toggleMenu)
    setToggleBar(!toggleBar)
  }

  return (
    <>
    
    
        <NavTop>
          <MenuUnfoldOutlined type="primary" onClick={toggleChange} style={{ marginBottom: 10, width:20 }}>
            { toggleBar ? <MenuOutlined /> : <MenuFoldOutlined /> }
          </MenuUnfoldOutlined>
        </NavTop>
        { toggleMenu &&
        <>
        
          <div className="sidebar">
            <div className="menuicon">
              <div className="label">
                <span className="tee">hi</span>
                <span></span>
                <span></span>
                </div>
            </div>
          </div>
        </>
        }
      

    
    
    </>
            
  );
};

export default Momenu