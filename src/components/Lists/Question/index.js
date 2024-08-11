import { useDispatch, useSelector } from 'react-redux';
import { QuestionCard } from '../../Cards/Question';
import { QuestionsContainer, QuestionsListContainer, ButtonCreateQuestion } from './styles';
import { useState } from 'react';
import ModalQuestion from '@/components/Modals/Question';
import { addNewQuestion } from '@/store/slices/perguntasSlice';
import toastr from 'toastr';
import { EmptyMessage, ErrorMessage, LoadingMessage } from '@/styles/globals';

const QuestionsList = ({ canalId }) => {
  const questions = useSelector((state) => state.perguntas.questions);
  const status = useSelector((state) => state.perguntas.status);
  const filteredQuestions = questions.filter((question) => question.canalId === canalId);

  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  const handleCreateQuestion = (texto) => {
      toastr.success("Questão criada com sucesso!");
      dispatch(addNewQuestion({texto,canalId}));
      handleCloseModal();
  };
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
      <ButtonCreateQuestion onClick={handleOpenModal} >+ Pergunta</ButtonCreateQuestion>
      <ModalQuestion isOpen={isModalOpen} onClose={handleCloseModal} onSubmit={handleCreateQuestion} canalId={canalId} />
    </QuestionsContainer>
  );
};

export default QuestionsList;
