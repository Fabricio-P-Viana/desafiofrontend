import { useState } from "react";
import toastr from "toastr";
import { RatingContainer, Star, Button } from "./styles";
import { Input, ModalContainer, Overlay } from "@/styles/globals";
import { useDispatch } from "react-redux";
import { addNewResponse } from "@/store/slices/respostasSlice";

const RatingInput = ({ value, questionId }) => {
  const [hoverValue, setHoverValue] = useState(null);
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);
  const [feedback, setFeedback] = useState("");
  const dispatch = useDispatch();

  const handleClick = (rating) => {
    if (rating <= 6) {
      setShowFeedbackModal(true);
    } else {
      toastr.success("Obrigado pelo seu feedback!");
      dispatch(addNewResponse({ texto: "", nota: rating, questionId }));
    }
  };

  const handleMouseEnter = (rating) => {
    setHoverValue(rating);
  };

  const handleFeedbackSubmit = () => {
    if(feedback.length <= 0) return toastr.info("Campo de feedback vazio!");

    toastr.success("Obrigado pelo seu feedback!");

    dispatch(addNewResponse({ texto: feedback, nota: hoverValue, questionId }));
    setShowFeedbackModal(false);
  };

  return (
    <RatingContainer>
      {[...Array(11).keys()].map((_, index) => {
        if (index === 0 && value === 0) {
          return null; 
        }
        const isActive = index <= (hoverValue ?? value);
        return (
          <Star
            key={index}
            className={isActive ? 'active' : 'inactive'}
            onClick={() => handleClick(index)}
            onMouseEnter={() => handleMouseEnter(index)}
          >
            ★
          </Star>
        );
      })}

      {showFeedbackModal && (
        <Overlay>
          <ModalContainer>
            <h2>Nos dê um feedback!</h2>
            <Input
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
            />
            <Button onClick={handleFeedbackSubmit}>Enviar Feedback</Button>
            <Button onClick={() => setShowFeedbackModal(false)}>Cancelar</Button>
          </ModalContainer>
        </Overlay>
      )}
    </RatingContainer>
  );
};

export default RatingInput;