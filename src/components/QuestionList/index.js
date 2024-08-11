import { useSelector } from 'react-redux';
import { QuestionCard } from '../QuestionCard';
import { QuestionsContainer, QuestionsListContainer, EmptyMessage, ErrorMessage, LoadingMessage } from './styles';

const QuestionsList = ({ canalId }) => {
  const questions = useSelector((state) => state.perguntas.questions);
  const status = useSelector((state) => state.perguntas.status);
  const filteredQuestions = questions.filter((question) => question.canalId === canalId);

  return (
    <QuestionsContainer>
      {status === 'loading' && <LoadingMessage>Carregando...</LoadingMessage>}
      {status === 'succeeded' && filteredQuestions.length > 0 ? (
        <QuestionsListContainer>
          {filteredQuestions.map((question) => (
            <QuestionCard key={question.id} question={question} />
          ))}
        </QuestionsListContainer>
      ) : (
        status !== 'loading' && <EmptyMessage>Sem perguntas Disponíveis.</EmptyMessage>
      )}
      {status === 'failed' && <ErrorMessage>Erro ao carregar as perguntas.</ErrorMessage>}
    </QuestionsContainer>
  );
};

export default QuestionsList;
