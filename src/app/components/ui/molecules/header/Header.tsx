import React from "react";
import decagonLogo from "../../../assets/img/logo.png";
import avatarIcon from "../../../assets/img/avatar.png";
import menuBarIcon from "../../../assets/img/bar.jpeg";
import {
  MobileAppBarWrapper,
  AppBarLinks,
  AppBarImg,
  Icon,
  MenuBar,
  MainAppBarWrapper,
} from "./Header.style";

const Header: React.FC = () => {
  return (
    <>
      <MobileAppBarWrapper>
        <AppBarLinks>
          <AppBarImg src={decagonLogo} alt="decagon logo" />
          <h3>Good Morning, Emeka</h3>
          <Icon src={avatarIcon} alt="avatar" />
        </AppBarLinks>
        <MenuBar>
          <img src={menuBarIcon} alt="menu bar" />
        </MenuBar>
      </MobileAppBarWrapper>
      <MainAppBarWrapper>
        <h3>Good Morning, Emeka</h3>
        <Icon src={avatarIcon} alt="avatar" />
      </MainAppBarWrapper>
    </>
  );
};

export default Header;
