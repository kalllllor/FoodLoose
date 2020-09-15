import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Heading from 'components/Heading/Heading';
import Icon from 'components/Icon/Icon';
import Paragraph from 'components/Paragraph/Paragraph';

const RecipeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Amatic SC', cursive;
  ul {
    text-align: left;
    list-style-type: circle;
  }

  li {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;

const StyledHeading = styled(Heading)`
  margin: 20px 0;
`;

function RecipeTemplate({ title, type, parts }) {
  return (
    <RecipeWrapper>
      <StyledHeading big>{title}</StyledHeading>
      <Icon src={type} size={50} alt="icon" />
      {parts.map(({ name, ingredients, preparation }, i) => (
        <>
          <StyledHeading big>{name}</StyledHeading>
          <ul>
            {ingredients.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <Paragraph>{preparation}</Paragraph>
        </>
      ))}
    </RecipeWrapper>
  );
}

RecipeTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  parts: PropTypes.array.isRequired,
};

export default RecipeTemplate;
