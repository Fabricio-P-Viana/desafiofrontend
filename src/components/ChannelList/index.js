import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchChannels } from '@/store/slices/canaisSlice';
import ChannelCard from '../ChannelCard';

const ChannelsList = () => {
  const dispatch = useDispatch();
  const channels = useSelector((state) => state.canais.channels);
  const status = useSelector((state) => state.canais.status);
    
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchChannels());
    }
  }, [status, dispatch]);
  
  return (
    <>
      {status === 'loading' && <p>Carregando Canais...</p>}
      {status === 'succeeded' && channels && Array.isArray(channels) && channels.length > 0 ? (
        channels.map((channel) => (
          <ChannelCard key={channel.id} channel={channel} />
        ))
      ) : (
        <p>Sem Canais Disponíveis.</p>
      )}
      {status === 'failed' && <p>Erro ao Carregar Canais.</p>}
    </>
  );
};

export default ChannelsList;
