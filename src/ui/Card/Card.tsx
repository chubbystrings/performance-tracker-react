import React from "react";
import classes from './Card.module.css'

type Props = {stack: string; numberOfStudent: number; image: string}

const Card: React.FC<Props> = (props) => {
  return (
    <>
      <div className={classes["stack__card"]}>
        <div>
          <img src={props.image} alt="logo" />
        </div>
        <div>
          <p className={classes["stack__text"]}>{props.stack}</p>
        </div>
        <div>
          <p className={classes["number__of__students"]}>{props.numberOfStudent}</p>
        </div>
        <div>
          <p>Students</p>
        </div>
      </div>
    </>
  );
};

export default Card
