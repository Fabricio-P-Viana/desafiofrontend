import { AnswerContainer } from "./styles";


const AnswerItem = ({ answer }) => {
  return <AnswerContainer>{answer.text}</AnswerContainer>;
};

export default AnswerItem;
