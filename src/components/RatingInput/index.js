import { useState } from "react";
import { RatingContainer, Star } from "./styles";

const RatingInput = ({ value, onChange }) => {
  const [hoverValue, setHoverValue] = useState(null);

  const handleClick = (rating) => {
    onChange(rating);
  };

  const handleMouseEnter = (rating) => {
    setHoverValue(rating);
  };

  const handleMouseLeave = () => {
    setHoverValue(null);
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
    </RatingContainer>
  );
};

export default RatingInput;
