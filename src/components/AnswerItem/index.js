import { useSelector } from "react-redux";
import { AnswerCard, AnswerContainer, AnswerScore, AnswerText } from "./styles";

const AnswerItem = ({ questionId }) => {
  const answers = useSelector((state) => state.respostas.responses);
  const status = useSelector((state) => state.respostas.status);
  const filteredAnswers = answers.filter((answer) => answer.perguntaId === questionId);

  const renderStars = (nota) => {
    return Array.from({ length: nota }, (_, index) => (
      <span key={index}>★</span>
    ));
  };

  return (
    <AnswerContainer>
      {status === 'loading' && <p>Carregando...</p>}
      {status === 'succeeded' && filteredAnswers.length > 0 ? (
        filteredAnswers.map((answer) => (
          <AnswerCard key={answer.id}>
            <AnswerScore>{renderStars(answer.nota)}</AnswerScore>
            <AnswerText>{answer.texto}</AnswerText>
          </AnswerCard>
        ))
      ) : (
        <p>Sem respostas Disponíveis.</p>
      )}
      {status === 'failed' && <p>Erro ao carregar as respostas.</p>}
    </AnswerContainer>
  );
};

export default AnswerItem;
