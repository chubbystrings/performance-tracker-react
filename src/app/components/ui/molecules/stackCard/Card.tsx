import React from "react";
import { StackCard } from "./Card.style";
import Text from '../../atoms/text/Text';
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
        <Text type="smallText">{props.stack}</Text>
      </div>
      <div>
        <Text color="#63a568"  type="bigText">{props.noOfStudents}</Text>
      </div>
      <Text weight="900" type="smallText">Students</Text>
    </StackCard>
  );
};

export default Card;
