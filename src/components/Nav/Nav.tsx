import React from "react";
import classes from "./Nav.module.css";
import decagonLogo from "../../assets/img/logo.png";
import avatarIcon from "../../assets/img/avatar.png";
import menuBarIcon from "../../assets/img/bar.jpeg";

const Nav: React.FC = () => {
  const imgClass = `${classes.links} ${classes["navbar__links"]}`;
  return (
    <>
      <nav className={classes["responsive__nav"]}>
        <div className={classes.links}>
          <img
            className={classes.avatar}
            src={decagonLogo}
            alt="decagon logo"
          />
          <h3>Good Morning, Emeka</h3>
          <img className={classes.avatar} src={avatarIcon} alt="avatar" />
        </div>
        <div className={imgClass}>
          <p>Overview</p>
          <p>Students</p>
          <p>Logout</p>
        </div>
        <div className={classes["bar__wrapper"]}>
          <img src={menuBarIcon} alt="menu bar" />
        </div>
      </nav>
      <nav className={classes["main__nav"]}>
        <h3>Good Morning, Emeka</h3>
        <img className={classes.avatar} src={avatarIcon} alt="avatar" />
      </nav>
    </>
  );
};

export default Nav;
