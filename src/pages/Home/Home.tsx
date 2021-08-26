import React from "react";
import { Link } from "react-router-dom";
import classes from "./Home.module.css";
import decagonLogo from "../../assets/img/logo.png";
import teamsLogo from "../../assets/img/Teams-logo.png";

const Home: React.FC = () => {
  return (
    <main className={classes["login__page"]}>
      <section className={classes["sidebar__section"]}></section>
      <section className={classes["main__section"]}>
        <div>
          <div className={classes["tag__wrapper"]}>
            <img
              src={decagonLogo}
              className={classes["img__res"]}
              alt="decagon logo"
            />
          </div>
          <div className={classes["tag__wrapper"]}>
            <h4>Welcome to Decagon's Learning Tracker</h4>
          </div>
          <div className={classes["tag__wrapper"]}>
            <img
              src={teamsLogo}
              className={classes["img__res"]}
              alt="teams logo"
            />
          </div>
          <div className={classes["tag__wrapper"]}>
            <Link className={classes["btn__large"]} to="/dashboard">Login With Microsoft Teams</Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
