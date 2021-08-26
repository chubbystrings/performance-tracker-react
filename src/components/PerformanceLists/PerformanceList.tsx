import React from "react";
import classes from "./PerformanceList.module.css";

const PerformanceList: React.FC<{stack: string; progress: number}> = (props) => {
  return (
    <div className={classes["progress__wrapper"]}>
      <p>{props.stack}</p>
      <div>
        <div className={classes.flex}>
          <div className={props.progress < 50 ? classes.progressRed : classes.progressGreen }>
            <div></div>
          </div>
          <div>{props.progress}</div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceList;
