import React, { useState } from "react";
import Video from './../../videous/video.mp4'
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroBtnWrapper,
  HeroContent,
  HeroH1,
  HeroP,
  ArrowForward,
  ArrowRight,
} from "./HeroSectionElement";
import {Button} from './../ButtonElements'
import Search from "../Search/Search";
function HeroSection() {
 const [hover, setHover] = useState(false)

 const onHover = () => {
     setHover(!hover)
 }
  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <Search />
      </HeroContent>
    </HeroContainer>
  );
}

export default HeroSection;
