import { styled } from "styled-components";
import { NavLink } from "react-router-dom";

export const NavBar = styled.nav`
display: flex;
justify-content:space-between;
gap: 15px;
font-weight: 600;
font-size: 22px;
max-width: 1200px;
margin-left: auto;
margin-right: auto;
padding: 15px 15px;`

export const Wrapper = styled.div`
display:flex;

`

export const StyledLink = styled(NavLink)`
  color: #fff;
  text-decoration: none;
  margin-left: 20px;

  &.active {
    color: rgb(61, 254, 118);
  }
`;