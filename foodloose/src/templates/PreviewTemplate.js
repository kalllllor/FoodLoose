import React from 'react';
import styled from 'styled-components';
import picture1 from 'assets/pictures/set1.jpg';
import background from 'assets/icons/head2.svg';
import Heading from 'components/Heading/Heading';
import Button from 'components/Button/Button';
import Carousel from 'animation/Carousel';
import MotionTransition from 'animation/MotionTransition';
import { Link } from 'react-router-dom';

const StyledWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  position: absolute;
  z-index: 0;
`;

const PictureWrapper = styled.div`
  @media (min-width: 1000px) {
    position: absolute;
    top: 0%;
    left: 0;
    height: 100vh;
    width: 50%;
  }

  @media (max-width: 1000px) {
    display: none;
  }
`;

const TitleWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 100vh;
  padding: 0;
  margin: 0;
  background-color: ${({ activeColor }) => activeColor};
  background-image: url(${background});
  background-position: 90% 90%;
  background-repeat: no-repeat;
  background-size: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 1000px) {
    width: 50%;
  }

  @media (max-width: 1000px) {
    overflow-y: auto;
    width: 100%;
  }

  h1,
  button {
    display: block;
    padding: 30px 0;
  }
`;

const StyledHeading = styled(Heading)`
  font-size: 35px;
`;

function PreviewTemplate({ title, activeColor }) {
  return (
    <StyledWrapper>
      <MotionTransition side="leftSide">
        <PictureWrapper>
          <Carousel images={[picture1]} />
        </PictureWrapper>
      </MotionTransition>
      <MotionTransition side="rightSide">
        <TitleWrapper activeColor={activeColor.css}>
          <StyledHeading big>{title}</StyledHeading>
          <Button as={Link} to={`${title.replace(/\s/g, '')}`} activeColor={activeColor.css}>
            Pokaz wiecej
          </Button>
        </TitleWrapper>
      </MotionTransition>
    </StyledWrapper>
  );
}

export default PreviewTemplate;
