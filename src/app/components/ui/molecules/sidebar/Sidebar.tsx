import React from "react";
import {
  SidebarWrapper,
  Sidebar,
  LogoWrapper,
  NavLinkWrapper,
  NavIcons,
  LogoutWrapper,
} from "./Sidebar.style";
import decagonLogo from "../../../assets/img/logo.png";
import studentIcon from "../../../assets/img/students.svg";
import overviewIcon from "../../../assets/img/overview.svg";
import logoutIcon from "../../../assets/img/logout.svg";

const AppSidebar: React.FC = () => {
  return (
    <SidebarWrapper>
      <Sidebar>
        <LogoWrapper>
          <img src={decagonLogo} alt="decagon logo" />
        </LogoWrapper>
        <NavLinkWrapper>
          <NavIcons>
            <img src={overviewIcon} alt="overview icon" />
            <p>Overview</p>
          </NavIcons>
          <NavIcons>
            <img src={studentIcon} alt="overview icon" />
            <p>Students</p>
          </NavIcons>
        </NavLinkWrapper>
        <LogoutWrapper
         to="/"
        >
          <div>
            <img src={logoutIcon} alt="logout logo" />
          </div>
          <p>Logout</p>
        </LogoutWrapper>
      </Sidebar>
    </SidebarWrapper>
  );
};

export default AppSidebar;
