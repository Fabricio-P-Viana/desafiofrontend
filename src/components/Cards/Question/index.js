

import React from "react";
import { CardContainerQuestion, QuestionName } from "./styles";
import AnswerItem from "../../AnswerItem";
import RatingInput from "../../RatingInput";

export const QuestionCard = ({ question }) => {
  return (
    <CardContainerQuestion>
      <RatingInput value={0} questionId={question.id}/>
      <QuestionName>{question.texto}</QuestionName>
      <AnswerItem questionId={question.id}/>
    </CardContainerQuestion>
  );
};

export default QuestionCard;
