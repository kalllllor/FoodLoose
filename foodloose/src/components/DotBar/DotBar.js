import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Sets } from 'data/Sets';
import 'components/DotBar/index.css';

const BarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50px;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%);
  z-index: 1;
  transition: 2s all;
  @media (min-width: 1000px) {
    top: 50%;
    left: 50%;
    transform: translateY(-50%);
  }

  @media (max-width: 1000px) {
    top: 50%;
    left: 0%;
    transform: translateY(-50%);
  }
`;

const DotButton = styled.button`
  margin: 10px 0;
  border-radius: 3px;
  width: 25px;
  height: 25px;
  border: 1px solid black;
  &:hover {
    background-color: black;
    transform: scale(1.1);
  }

  &:focus {
    outline: none;
  }
`;

const DotBar = () => (
  <BarWrapper>
    {Sets.map((item) => (
      <>
        <DotButton
          key={item}
          exact
          as={NavLink}
          activeClassName="active"
          to={`${item.data.sets[0].title.replace(/\s/g, '')}Preview`}
        />
      </>
    ))}
  </BarWrapper>
);

export default DotBar;
