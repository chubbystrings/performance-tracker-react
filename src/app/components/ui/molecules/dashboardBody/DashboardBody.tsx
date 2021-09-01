import React from "react";
import { Body, ContentWrapper } from "./DashboardBody.style";
import StackInfo from "../stacks/Stacks";
import PerformanceCard from "../performanceCard/PerformanceCard";

const DashboardBody: React.FC = () => {
  return (
    <Body>
      <ContentWrapper>
       <StackInfo />
       <PerformanceCard />
      </ContentWrapper>
    </Body>
  );
};

export default DashboardBody;
