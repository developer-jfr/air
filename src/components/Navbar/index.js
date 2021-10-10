import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { IconContext } from 'react-icons/lib'
import {animateScroll as scroll} from 'react-scroll'
import {
  Nav,
  NavLogo,
  NavbarContainer,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NvabarElements";

const  Navbar = ({ toggle}) => {
  const [scrollNav, setScrollNav] = useState(true);
  
const changeNav = () => {

  //if you want to add 
  /**
   * 
   * if(window.scrollY >= 80) {
    setScrollNav(true)
  } else {
    setScrollNav(false)
  }
   */
};

useEffect(() => {
  window.addEventListener('scroll' , changeNav)
  
}, []);

const toggleHome = () => {
  scroll.scrollToTop()
}

  return (
    <>
    <IconContext.Provider value={{color: '#fff'}}>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer >
          <NavLogo  onClick={toggleHome} to="/">air</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about"
              smooth={true}
              duration={800}
              spy={true}
              exact='true'
              offset={-80}
              >About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="skill"
              smooth={true}
              duration={800}
              spy={true}
              exact='true'
              offset={-80}
              >Skill</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="work"
              smooth={true}
              duration={800}
              spy={true}
              exact='true'
              offset={-80}
              >Work</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="servise"
              smooth={true}
              duration={800}
              spy={true}
              exact='true'
              offset={-80}
              >Servise</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="contact"
              smooth={true}
              duration={800}
              spy={true}
              exact='true'
              offset={-80}
              >Contact</NavLinks>
            </NavItem>
         
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="resume">Search</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
