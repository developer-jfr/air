import React from "react";
import {
  SideBarContainer,
  Icon,
  CloseIcon,
  SideBarLink,
  SideBarRoutes,
  SideBarWrapper,
  SideBtnWrap,
  SideBarMenu,
} from "./SideBarElement";

const SideBar = ({ isOpen, toggle }) => {

  
  return (
    <SideBarContainer isOpen={isOpen} onClick={toggle}>
   
      <SideBarWrapper>
        <SideBarMenu>
          <SideBarLink onClick={toggle} to="about">About</SideBarLink>
          <SideBarLink onClick={toggle} to="skill">Skill</SideBarLink>
          <SideBarLink onClick={toggle} to="work">Work</SideBarLink>
          <SideBarLink onClick={toggle} to="servise">Servise</SideBarLink>
          <SideBarLink onClick={toggle} to="contact">Contact</SideBarLink>
        </SideBarMenu>
        <SideBtnWrap>
          <SideBarRoutes to="resume">Resume</SideBarRoutes>
        </SideBtnWrap>
      </SideBarWrapper>
    </SideBarContainer>
  );
};

export default SideBar;
