import { useSelector } from "react-redux";
import { AnswerContainer, AnswerScore, AnswerText } from "./styles";

const AnswerItem = ({ questionId }) => {
  const answers = useSelector((state) => state.respostas.responses);
  const status = useSelector((state) => state.respostas.status);
  const filteredAnswers = answers.filter((answer) => answer.perguntaId === questionId);

  return (
    <div>
      {status === 'loading' && <p>Carregando...</p>}
      {status === 'succeeded' && filteredAnswers.length > 0 ? (
        filteredAnswers.map((answer) => (
          <AnswerContainer key={answer.id}>
            <AnswerScore>{answer.nota} estrelas</AnswerScore>
            <AnswerText>{answer.texto}</AnswerText>
          </AnswerContainer>
        ))
      ) : (
        <p>Sem respostas Disponíveis.</p>
      )}
      {status === 'failed' && <p>Erro ao carregar as respostas.</p>}
    </div>
  );
};

export default AnswerItem;
