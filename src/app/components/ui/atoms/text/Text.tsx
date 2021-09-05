import React from "react";
import { BigText, SmallText } from "./Text.style";

const Text: React.FC<{
  color?: string;
  type: "smallText" | "bigText";
  size?: string;
  weight?: string;
}> = (props) => {
  return (
    <>
      {props.type === "bigText" && (
        <BigText
          size={props.size || "70px"}
          weight={props.weight}
          color={props.color}
        >{props.children}</BigText>
      )}
      {props.type === "smallText" && (
        <SmallText
          size={props.size || "20px"}
          weight={props.weight}
          color={props.color}
        >{props.children}</SmallText>
      )}
    </>
  );
};

export default Text;
