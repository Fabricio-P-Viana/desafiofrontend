import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchQuestions } from '@/store/slices/perguntasSlice';
import { QuestionCard } from '../QuestionCard';

const QuestionsList = ({ canalId }) => {
  const dispatch = useDispatch();
  const questions = useSelector((state) => state.perguntas.questions);
  const status = useSelector((state) => state.perguntas.status);
  
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchQuestions(canalId)); 
    }
  }, [status, dispatch, canalId]);
  return (
    <div>
      {status === 'loading' && <p>Carregando...</p>}
      {status === 'succeeded' && questions.length > 0 ? (
        <ul>
          {questions.map((question) => (
            
            <QuestionCard key={question.id} question={question} />
          ))}
        </ul>
      ) : (
        <p>Sem perguntas Disponíveis.</p>
      )}
      {status === 'failed' && <p>Erro ao carregar as perguntas.</p>}
    </div>
  );
};

export default QuestionsList;
