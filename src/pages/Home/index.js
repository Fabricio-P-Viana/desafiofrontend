import Header from '@/components/Header';
import ChannelsList from '@/components/Lists/Channel';
import { HomeContainer } from './styles';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
    <HomeContainer>
      <Header />
      <ChannelsList />
      <Footer/>
    </HomeContainer>
    </>
  );
}
