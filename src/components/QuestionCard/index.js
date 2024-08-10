

import QuestionsList from "../QuestionList";
import { CardContainerQuestion, QuestionName } from "./styles";

export const QuestionCard = ({ question }) => {
  return (
    <CardContainerQuestion>
      <QuestionName>{question.texto}</QuestionName>
      <QuestionsList canalId={question.id} />
    </CardContainerQuestion>
  );
};

export default QuestionCard;
