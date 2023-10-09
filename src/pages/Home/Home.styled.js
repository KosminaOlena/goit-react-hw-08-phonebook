import styled from 'styled-components';
import { NavLink } from "react-router-dom";

export const Invitation = styled.div`
text-align: center;
`
export const Title = styled.h2`
display: block;
margin-top: 50px;
margin-bottom: 10px;`

export const StyledLink = styled(NavLink)`
display: block;
width: 80%;
margin:15px auto;
padding: 10px;
border: 3px solid;
border-image: linear-gradient(to top,  rgb(1, 212, 64), rgb(27, 73, 200));
border-image-slice: 1;
background-color: #fff;
color: rgb(1, 180, 30);
font-weight: 500;
font-size: 20px;
  &:hover {
    color: rgb(27, 73, 200);
    background-color: #fff;
    cursor: pointer;
    border-image: linear-gradient(to bottom,  rgb(1, 212, 64), rgb(27, 73, 200));
    border-image-slice: 1;
  }
`