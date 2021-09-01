import React from "react";
import { stacksInfo } from "./StacksInfo";
import StackCard from "../stackCard/Card";
import StackInfoWrapper from "./StacksInfo.style";

const StackInfo: React.FC = () => {
  return (
    <StackInfoWrapper>
      {stacksInfo.map((stack) => (
        <StackCard
          key={stack.name}
          image={stack.image}
          noOfStudents={stack.numberOfStudents}
          stack={stack.name}
        />
      ))}
    </StackInfoWrapper>
  );
};

export default StackInfo;
