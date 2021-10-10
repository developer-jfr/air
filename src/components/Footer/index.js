import React , {useState, useEffect}from "react";
import {FaFacebook, FaInstagram, FaGithub} from 'react-icons/fa'
import {animateScroll as scroll} from 'react-scroll';
import {
  FooterContainer,
  FooterLink,
  FooterLinkContainer,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLinkWrapper,
  FooterWrap,
  SocialIcons,
  SocialLink,
  SocialLogo,
  SocialMedia,
  SocialMediaWrapp,
  WebsireRight,
 
} from "./FooterElements";
function Footer() {

  const [scrollNav, setScrollNav] = useState(false);
  
  const changeNav = () => {
    if(window.scrollY >= 80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  };
  
  useEffect(() => {
    window.addEventListener('scroll' , changeNav)
    
  }, []);
  
  const toggleHome = () => {
    scroll.scrollToTop()
  }
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinkContainer>
       
        
        </FooterLinkContainer>

        
        <SocialMedia>
          <SocialMediaWrapp>
            <SocialLogo onClick={toggleHome}  to='/' >
              dev
            </SocialLogo>
            <WebsireRight>dev & {new Date().getFullYear()}</WebsireRight>
            
            <SocialIcons>
              <SocialLink href='/' target='_blank'
              aria-label='Facebook'>
                <FaFacebook />    
              </SocialLink>
            </SocialIcons>
            <SocialIcons>
              <SocialLink href='https://www.instagram.com/erkinbaevbakai/' target='_blank'
              aria-label='Instagram'>
                <FaInstagram/>       
              </SocialLink>
            </SocialIcons>
            <SocialIcons>
              <SocialLink href='https://github.com/developer-jfr?tab=repositories' target='_blank'
              aria-label='Github'>
                <FaGithub />      
              </SocialLink>
            </SocialIcons>
         
          </SocialMediaWrapp>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
}

export default Footer;
