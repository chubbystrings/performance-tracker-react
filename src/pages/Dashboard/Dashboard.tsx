import React from "react";
import classes from "./Dashboard.module.css";
import decagonLogo from "../../assets/img/logo.png";
import studentIcon from "../../assets/img/students.svg";
import overviewIcon from "../../assets/img/overview.svg";
import BackIcon from "../../assets/img/back.svg";
import NextIcon from "../../assets/img/next.svg";
import logoutIcon from "../../assets/img/logout.svg";
import Nav from "../../components/Nav/Nav";
import Stacks from "../../components/Stacks/Stacks";
import { stackProgress } from "../../helpers/stacks";
import PerformanceList from "../../components/PerformanceLists/PerformanceList";

const Dashboard: React.FC = () => {
  return (
    <main className={classes.dashboard}>
      <section className={classes["dashboard__sidebar"]}>
        <div className={classes["logo__wrapper"]}>
          <img src={decagonLogo} alt="decagon logo" />
        </div>
        <div className={classes["navLink__wrapper"]}>
          <div className={classes["nav__icons"]}>
            <img src={overviewIcon} alt="overview icon" />
            <p>Overview</p>
          </div>
          <div className={classes["nav__icons"]}>
            <img src={studentIcon} alt="overview icon" />
            <p>Students</p>
          </div>
        </div>
        <div className={classes["logout__wrapper"]}>
          <div>
            <img src={logoutIcon} alt="logout logo" />
          </div>
          <p>Logout</p>
        </div>
      </section>
      <section className={classes["dashboard__content"]}>
        <Nav />
        <div className={classes["dashboard__content__wrapper"]}>
          <Stacks />
          <div className={classes["performance__wrapper"]}>
            <div className={classes["performance__card"]}>
              <div className={classes["performance__card__wrapper"]}>
                <h3>Average Performance by Stack</h3>
                <div className={classes["squad__btn"]}>
                  <img src={BackIcon} alt="back button icon" />
                  <small>Squad 1</small>
                  <img src={NextIcon} alt="Next button Icon" />
                </div>
                <div>
                  {stackProgress.map((progress) => (
                    <PerformanceList
                      key={progress.stack}
                      stack={progress.stack}
                      progress={progress.progress}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Dashboard;
