import React from "react";
import Card from "../../ui/Card/Card";
import { stacks } from "../../helpers/stacks";
import getImageByKey from "../../helpers/getImageByKey";
import classes from './Stacks.module.css';

const Stacks: React.FC = () => {
  return (
    <div className={classes["stack__wrapper"]}>
      {stacks.map((stack) => (
        <Card
          key={stack.name}
          image={getImageByKey(stack.image)}
          numberOfStudent={stack.numberOfStudents}
          stack={stack.name}
        />
      ))}
    </div>
  );
};

export default Stacks;
