import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchChannels } from '@/store/slices/canaisSlice';
import ChannelCard from '../../Cards/Channel';
import { fetchQuestions } from '@/store/slices/perguntasSlice';
import { fetchResponses } from '@/store/slices/respostasSlice';
import { CenteredContainer } from './styles';
import { EmptyMessage, ErrorMessage, LoadingMessage } from '@/styles/globals';

const ChannelsList = () => {
  const dispatch = useDispatch();
  const channels = useSelector((state) => state.canais.channels);
  const status = useSelector((state) => state.canais.status);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchResponses());
    }
  }, [status, dispatch]);
  
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchQuestions());
    }
  }, [status, dispatch]);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchChannels());
    }
  }, [status, dispatch]);
  
  return (
    <CenteredContainer>
      {status === 'loading' && <LoadingMessage>Carregando Canais...</LoadingMessage>}
      {status === 'succeeded' && channels && Array.isArray(channels) && channels.length > 0 ? (
        channels.map((channel) => (
          <ChannelCard key={channel.id} channel={channel} />
        ))
      ) : (
        <EmptyMessage>Sem Canais Disponíveis.</EmptyMessage>
      )}
      {status === 'failed' && <ErrorMessage>Erro ao Carregar Canais.</ErrorMessage>}
    </CenteredContainer>
  );
};

export default ChannelsList;
