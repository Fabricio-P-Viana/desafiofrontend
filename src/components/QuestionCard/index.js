

import React from "react";
import { CardContainerQuestion, QuestionName } from "./styles";
import AnswerItem from "../AnswerItem";
import RatingInput from "../RatingInput";

export const QuestionCard = ({ question }) => {
  const handleRatingChange = (rating) => {
    console.log(`Nova classificação para a pergunta ${question.id}: ${rating}`);
  };

  return (
    <CardContainerQuestion>
      <RatingInput value={0} onChange={handleRatingChange} />
      <QuestionName>{question.texto}</QuestionName>
      <AnswerItem questionId={question.id}/>
    </CardContainerQuestion>
  );
};

export default QuestionCard;
