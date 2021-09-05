import React from "react";
import Header from "../ui/molecules/header/Header";
import Sidebar from "../ui/molecules/sidebar/Sidebar";
import styled from "styled-components";
import DashboardBody from "../ui/molecules/dashboardBody/DashboardBody";

const DashboardLayout: React.FC = () => {
  return (
    <>
      <Header />
      <Wrapper>
        <Sidebar />
        <DashboardBody />
      </Wrapper>
    </>
  );
};

export default DashboardLayout;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: #ffffff;
`;
