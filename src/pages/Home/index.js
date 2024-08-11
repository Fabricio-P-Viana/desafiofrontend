import Header from '@/components/Header';
import ChannelsList from '@/components/Lists/Channel';
import { HomeContainer } from './styles';

export default function Home() {
  return (
    <HomeContainer>
      <Header />
      <ChannelsList />
    </HomeContainer>
  );
}
