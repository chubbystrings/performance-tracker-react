import styled from "styled-components";

export const MobileAppBarWrapper = styled.nav`
  background-color: #ffffff;
  position: absolute;
  width: 100%;
  height: 80px;
  top: 0px;
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

export const AppBarLinks = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 5px;
`;

export const AppBarImg = styled.img`
  height: 40px;
  width: 44px;
  margin: 20px;
`;
export const AppBarNavLinks = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 5px;
`;
export const MenuBar = styled.div`
  & img {
    height: 40px;
    width: 40px;
    margin: 20px;
  }
  & img:hover {
    cursor: pointer;
  }
  @media screen and (min-width: 1020px) {
    display: inline;
  }
`;

export const Icon = styled.img`
  margin-right: 10px;
  width: 40px;
  height: 40px;
`;

export const MainAppBarWrapper = styled.nav`
  background-color: #ffffff;
  visibility: hidden;
  padding-left: 141px;
  box-sizing: border-box;
  position: absolute;
  width: 100%;
  height: 95px;
  top: 0px;
  gap: 10px;
  align-items: center;
  display: flex;
  @media screen and (min-width: 1020px) {
    visibility: visible;
  }
`;
