import React from "react";
import styled from "styled-components";
import EmptyHeartImage from "../assets/emptyheart.png";
import HeartImage from "../assets/heart.png";

const Heart = styled.img`
  // css
`;

interface HeartButtonProps {
  like: boolean;
  onClick: () => void;
}

const HeartButton = ({ like, onClick }: HeartButtonProps) => {
  return (
    <Heart
      src={like ? HeartImage : EmptyHeartImage}
      alt="하트"
      //width, height
      onClick={onClick}
    />
  );
};

export default HeartButton;
