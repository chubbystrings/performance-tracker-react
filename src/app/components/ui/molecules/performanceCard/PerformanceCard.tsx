import React from "react";
import BackIcon from "../../../assets/img/back.svg";
import NextIcon from "../../../assets/img/next.svg";
import {
  PerformanceWrapper,
  PerformanceCard as Card,
  PerformanceCardWrapper,
  SquadButton,
} from "./PerformanceCard.style";
import { stackProgress } from "./StackProgress";
import PerformanceList from "../performanceList/PerformanceList";

const PerformanceCard: React.FC = () => {
  return (
    <PerformanceWrapper>
      <Card>
        <PerformanceCardWrapper>
          <h3>Average Performance by Stack</h3>
          <SquadButton>
            <img src={BackIcon} alt="back button icon" />
            <small>Squad 1</small>
            <img src={NextIcon} alt="Next button Icon" />
          </SquadButton>
          <div>
            {stackProgress.map((stack) => (
              <PerformanceList key={stack.stack} stack={stack.stack} progress={stack.progress} />
            ))}
          </div>
        </PerformanceCardWrapper>
      </Card>
    </PerformanceWrapper>
  );
};

export default PerformanceCard;
