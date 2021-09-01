import styled from "styled-components";

export const PerformanceWrapper = styled.div`
  margin: 0 auto;
  @media screen and (min-width: 1020px) {
   margin: 10px
  }
`;

export const PerformanceCard = styled.div`
  width: 360px;
  height: 630px;
  background: #ffffff;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  box-sizing: border-box;
  padding: 50px 15px 15px 15px;
  margin-bottom: 20px;
  & h3 {
    text-align: center;
    font-family: Mulish;
    font-style: normal;
    font-weight: 800;
    font-size: 20px;
    line-height: 20px;
    width: 250px;
    margin: 50px auto;
    color: #242424;
  }
`;

export const PerformanceCardWrapper = styled.div`
  width: 300px;
  margin: 0 auto;
`;

export const SquadButton = styled.div`
  display: flex;
  justify-content: space-around;
  & img {
    width: 20px;
    height: 20px;
  }
  & small {
    font-family: Mulish;
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    line-height: 28px;
    /* identical to box height */

    color: rgba(52, 56, 83, 0.54);
  }
`;
