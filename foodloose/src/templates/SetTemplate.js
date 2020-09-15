import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import RecipeTemplate from 'templates/RecipeTemplate';
import Heading from 'components/Heading/Heading';
import Paragraph from 'components/Paragraph/Paragraph';
import Underline from 'components/Underline/Underline';
import Button from 'components/Button/Button';
import picture1 from 'assets/pictures/set1.jpg';
import picture2 from 'assets/pictures/set2.jpg';
import picture3 from 'assets/pictures/set3.jpg';
import Carousel from 'animation/Carousel';
import MotionTransition from 'animation/MotionTransition';
import Przystawka from 'assets/icons/plate.svg';
import DanieGlowne from 'assets/icons/pot.svg';
import Deser from 'assets/icons/dessert.svg';
import { darken } from 'polished';

const dishType = {
  Przystawka: Przystawka,
  DanieGlowne: DanieGlowne,
  Deser: Deser,
};

const StyledWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  position: absolute;
  z-index: 2;
`;

const PictureWrapper = styled.div`
  @media (min-width: 1280px) {
    position: absolute;
    top: 0%;
    left: 0;
    height: 100vh;
    width: 50%;
  }

  @media (max-width: 1280) {
    display: none;
  }
`;

const ContentWrapper = styled.div`
  position: absolute;
  overflow-x: hidden;
  top: 0%;
  right: 0;
  height: 100vh;
  background-color: ${({ backgroundColor }) => backgroundColor};
  text-align: center;
  display: grid;
  grid-template-rows: 0.25fr 1fr 0.1fr;
  @media (min-width: 1280px) {
    width: 50%;
  }

  @media (max-width: 1281px) {
    overflow-y: auto;
    width: 100%;
  }
`;

const HeadingWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 1280px) {
    padding-top: 120px;
    width: 100vw;
  }
`;

const StyledHeading = styled(Heading)`
  margin: 20px auto 20px auto;
  font-size: 3.8rem;
`;

const StyledParagraph = styled(Paragraph)`
  margin: 0;
`;

const FooterWrapper = styled.div`
  height: 100%;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const RecipesWrapper = styled.div`
  height: 100%;
  padding: 0 8vw;
  p {
    text-align: left;
    font-family: 'Amatic SC', cursive;
    font-weight: 700;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  &::-webkit-scrollbar {
    width: 10px;
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ backgroundColor }) => darken(0.3, `${backgroundColor}`)};
    border-radius: 2px;
  }
  @media (min-width: 1000px) {
    overflow-y: auto;
  }
  @media (max-width: 1000px) {
    width: 100vw;
  }
`;

const StyledButton = styled(Button)`
  position: absolute;
  right: 20px;
  z-index: 3;
  padding: 5px;
  @media (min-width: 1280px) {
    top: 50px;
  }
  @media (min-width: 620px) and (max-width: 1280px) {
    top: 150px;
  }
  @media (max-width: 620px) {
    top: 120px;
    position: fixed;
  }
`;

function SetTemplate({
  Sets: {
    data: { sets },
  },
  uni,
}) {
  const length = sets[0].listOfRecipes.length;
  return (
    <StyledWrapper>
      <MotionTransition side="leftSide" uni={uni}>
        <PictureWrapper>
          <Carousel images={[picture1, picture2, picture3]} />
        </PictureWrapper>
      </MotionTransition>
      <MotionTransition side="rightSide" uni={uni}>
        <ContentWrapper backgroundColor={sets[0].color.css}>
          <HeadingWrapper big>
            <StyledButton
              exact
              as={NavLink}
              activeColor={sets[0].color.css}
              to={`${sets[0].title.replace(/\s/g, '')}Preview`}
            >
              Powrót
            </StyledButton>
            <Heading big>{sets[0].title}</Heading>
            <Heading>{sets[0].titleExtension}</Heading>
            <Underline color={sets[0].color.css} width={10} size={50} />
          </HeadingWrapper>
          <RecipesWrapper backgroundColor={sets[0].color.css}>
            <StyledHeading big>Opis</StyledHeading>
            <StyledParagraph>{sets[0].description}</StyledParagraph>
            <StyledHeading big>Przepisy</StyledHeading>
            {sets[0].listOfRecipes.map(({ name, type, parts }, i) => (
              <>
                <RecipeTemplate title={name} type={dishType[type]} parts={parts} />
                {length !== i + 1 && (
                  <Underline color={sets[0].color.css} width={75} size={40} second />
                )}
              </>
            ))}
            <StyledHeading big>SMACZNEGO!</StyledHeading>
          </RecipesWrapper>
          <FooterWrapper>
            <Underline color={sets[0].color.css} width={10} size={50} />
          </FooterWrapper>
        </ContentWrapper>
      </MotionTransition>
    </StyledWrapper>
  );
}

export default SetTemplate;
