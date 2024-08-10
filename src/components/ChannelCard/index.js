import { CardContainer, ChannelName } from "./styles";
import QuestionsList from "../QuestionList";

const ChannelCard = ({ channel }) => {
  return (
    <CardContainer>
      <ChannelName>{channel.nome}</ChannelName>
      <QuestionsList canalId={channel.id} />
    </CardContainer>
  );
};

export default ChannelCard;
