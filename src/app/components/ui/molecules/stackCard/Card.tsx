import React from "react";
import { StackCard, BigCardText, SmallCardText } from "./Card.style";
import getImageByKey from "../../../../utils/getImageByKey";

const Card: React.FC<{ image: string; stack: string; noOfStudents: number }> = (
  props
) => {
  return (
    <StackCard>
      <div>
        <img src={getImageByKey(props.image)} alt="logo" />
      </div>
      <div>
        <SmallCardText>{props.stack}</SmallCardText>
      </div>
      <div>
        <BigCardText>{props.noOfStudents}</BigCardText>
      </div>
      <SmallCardText>Students</SmallCardText>
    </StackCard>
  );
};

export default Card;
