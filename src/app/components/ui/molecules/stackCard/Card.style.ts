import styled from "styled-components";

export const StackCard = styled.div`
  text-align: center;
  padding-top: 30px;
  box-sizing: border-box;
  width: 200px;
  height: 302px;
  background: #ffffff;
  border-radius: 20px;
  margin: 10px;
  position: relative;
  & img {
    height: 60px;
    width: 60px;
  }
`;

export const CardWrapper = styled.div`
  width: 100%;
  text-align: center;
  height: 65px;
`;

export const BigCardText = styled.p`
  font-family: Mulish;
  font-style: normal;
  font-weight: 900;
  font-size: 70px;
  line-height: 10px;
  /* identical to box height */
  color: #63a568;
  margin: 5px;
`;

export const SmallCardText = styled.p`
  font-family: Mulish;
  font-style: normal;
  font-size: 20px;
  margin-top: 20px;
  margin-bottom: 40px;
  padding: 15px;
  /* identical to box height */
`;
