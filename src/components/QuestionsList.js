import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchQuestions } from '../store/slices/perguntasSlice';

const QuestionsList = () => {
  const dispatch = useDispatch();
  
  // Corrigido para acessar o estado correto
  const questions = useSelector((state) => state.perguntas.questions);
  const status = useSelector((state) => state.perguntas.status);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchQuestions());
    }
  }, [status, dispatch]);

  return (
    <div>
      <h1>Lista de Perguntas</h1>
      {status === 'loading' && <p>Carregando...</p>}
      {status === 'succeeded' && (
        <ul>
          {questions.map((question) => (
            <li key={question.id}>{question.texto}</li>
          ))}
        </ul>
      )}
      {status === 'failed' && <p>Erro ao carregar as perguntas.</p>}
    </div>
  );
};

export default QuestionsList;
