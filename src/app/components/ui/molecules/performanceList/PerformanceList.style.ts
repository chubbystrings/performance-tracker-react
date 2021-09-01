import styled from "styled-components";

export const ProgressWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 30px;
  align-items: center;
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Progress = styled.div`
  background-color: #eeeaea;
  border-radius: 13px;
  width: 80px;
  height: 8px;
  & > div {
    background-color: ${(props: {progress: number}) => (props.progress >= 50 ? "green" : "red")};
    width: ${(props: {progress: number}) => (props.progress + '%')};
    height: 8px;
    border-radius: 13px;
  }
`;
