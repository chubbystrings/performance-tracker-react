import styled from "styled-components";

type TEXT = {weight?: string; color?: string; size?: string}

export const SmallText = styled.p`
  font-family: Mulish;
  font-style: normal;
  font-size: ${(props: TEXT) => props.size || '70px'};
  margin-top: 20px;
  margin-bottom: 40px;
  padding: 15px;
  font-weight: ${(props: TEXT) => props.weight || '0'};
`;

export const BigText = styled.h3`
  font-family: Mulish;
  font-style: normal;
  font-weight: ${(props: TEXT) => props.weight};
  font-size: ${(props: TEXT) => props.size};
  line-height: 10px;
  /* identical to box height */
  color: ${(props: TEXT) => props.color};
  margin: 5px;
`;
