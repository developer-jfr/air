import styled from 'styled-components'
import {Link} from 'react-scroll' 

export const Button = styled(Link)`
margin-top: -5px;
border-radius: 50px;
background: ${({primary}) => (primary ? '#01BF71' : '#010606')};
color : ${({dark}) => (dark ? '#010606' : '#fff')};
padding: ${({big}) => (big ? '10px 20px' : '10px 20px')};
font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
white-space: nowrap;
outline: none;
border: none;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
transition: all 0.2s ease-in-out;

&:hover{
  transition: all 0.2s ease-in-out;
  background: ${({primary}) => (primary ? '#fff' : '#fff')};
}
`