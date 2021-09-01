import styled from "styled-components";
import { Link } from 'react-router-dom'

export const SidebarWrapper = styled.main`
  display: none;
  @media screen and (min-width: 1020px) {
    display: flex;
  }
 
`;
export const Sidebar = styled.nav`
  position: relative;
  width: 9%;
  height: 100vh;
`;

export const LogoWrapper = styled.div`
  position: absolute;
  width: 57px;
  height: 59px;
  left: 42px;
  top: 46px;
  text-align: center;
`;

export const NavLinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: fit-content;
  left: 42px;
  top: 220.87px;
  gap: 80px;
  margin: 0 0 10px -10px;
`;

export const NavIcons = styled.div`
  text-align: center;
  width: fit-content;
`;

export const LogoutWrapper = styled(Link)`
  position: absolute;
  left: 42px;
  bottom: 30px;
  width: 50px;
  text-align: center;
  text-decoration: none;
  color: #242424;
  & img {
    width: 25px
  }
`;
