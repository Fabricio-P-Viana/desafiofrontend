import { useState } from "react";
import toastr from "toastr";
import { RatingContainer, Star, Modal, Button } from "./styles";

const RatingInput = ({ value, onChange }) => {
  const [hoverValue, setHoverValue] = useState(null);
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);
  const [feedback, setFeedback] = useState("");

  const handleClick = (rating) => {
    if (rating <= 6) {
      setShowFeedbackModal(true);
    } else {
      toastr.success("Obrigado pelo seu feedback!");
    }
  };

  const handleMouseEnter = (rating) => {
    setHoverValue(rating);
  };

  const handleMouseLeave = () => {
    setHoverValue(null);
  };

  const handleFeedbackSubmit = () => {
    toastr.success("Obrigado pelo seu feedback!");
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
            onMouseLeave={handleMouseLeave}
          >
            ★
          </Star>
        );
      })}
      <span>{hoverValue}</span>

      {showFeedbackModal && (
        <Modal>
          <h2>Por favor, nos dê um feedback</h2>
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            rows="4"
            cols="50"
          />
          <Button onClick={handleFeedbackSubmit}>Enviar Feedback</Button>
          <Button onClick={() => setShowFeedbackModal(false)}>Cancelar</Button>
        </Modal>
      )}
    </RatingContainer>
  );
};

export default RatingInput;
