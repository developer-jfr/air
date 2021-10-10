import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
  background-color: #101522;
`;

export const FooterWrap = styled.div`
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`;
export const FooterLinkContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen annd (max-width: 820px) {
    padding-top: 32px;
  }
`;

export const FooterLinkWrapper = styled.div`
display: grid;
grid-template-columns:5fr 3fr ;

  @media screen annd (min-width: 620px) {
    grid-template-columns:2fr ;
  }
`;

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: #fff;
  
  

  @media screen annd (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
    
  }
 
`;

export const FooterLinkTitle = styled.h1`
  font-size: 14px;
  margin-bottom: 16px;
`;

export const FooterLink = styled.a`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;

  &:hover {
    color: #01bf71;
    transition: 0.3s ease-out;
  }
`;

export const SocialMedia = styled.section`


max-width: 1000px;
width: 100%;

`
export const SocialMediaWrapp = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
max-width: 1100px;
margin: 40px auto 0 auto;
@media screen and (max-width: 820px) {
    flex-direction: row;
}
`

export const SocialLogo = styled(Link)`
color: #fff;
justify-self: start;
cursor: pointer;
text-decoration: none;
font-size: 1.5rem;
display: flex;
align-items: center;
margin-bottom: 16px;
font-weight: bold;
padding-left: 10px;
`

export const WebsireRight = styled.small`
color: #fff;
margin-bottom: 16px;
`

export const SocialIcons = styled.div`
display: flex;
align-items: center;
width: 40px;

`

export const SocialLink = styled.a`
color: #fff;
font-size: 24px;

`
