import styled from "styled-components";

export const Body = styled.div`
  background-color: #f4f6f8;
  width: 100%;
  height: fit-content;
  @media screen and (min-width: 1020px) {
    width: 91%;
    margin-left: 141px;
    height: fit-content;
  }
`;

export const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 3fr;
  padding-top: 120px;
  box-sizing: border-box;
  grid-gap: 30px;
  height: fit-content;
  text-align: center;
  @media screen and (min-width: 1020px) {
    grid-template-columns: 2fr 1fr;
    height: fit-content;
  }
`;
