import styled from "styled-components";

export const HomePageWrapper = styled.main`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 100vh;
  background-color: #ffffff;
`;

export const SectionOne = styled.section`
  height: 100vh;
  background-color: #242424;
  display: none;
  @media screen and (min-width: 1020px) {
    width: 30%;
    display: inline;
  }
`;

export const SectionTwo = styled.section`
  width: 100%;
  height: 100vh;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  padding-top: 100px;
  box-sizing: border-box;
  & h4 {
    font-family: Mulish;
    font-style: normal;
    width: 302px;
    height: 80px;
    font-style: normal;
    font-weight: 400;
    font-size: 29px;
    line-height: 35px;
    text-align: center;
    margin: 0 auto;
    color: #242424;
  }
  @media screen and (min-width: 1020px) {
    width: 70%;
    & h4 {
      width: 350px;
      height: 86px;
      font-weight: 600;
      text-align: center;
    }
  }
`;

export const TagWrapper = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 3rem;
  margin-bottom: 3rem;
`;

export const ImgResponsive = styled.img`
  height: 62px;
  width: 64px;
`;
