import React from 'react';
import PropTypes from 'prop-types';
import { darken } from 'polished';
import styled from 'styled-components';
import headIcon from 'assets/icons/head.svg';
import mixerIcon from 'assets/icons/mixer.svg';

const StyledSpan = styled.span`
  width: ${({ width }) => width}vw;
  height: 2px;
  background-color: ${({ color }) => darken(0.3, `${color}`)};
`;

const UnderlineWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledIcon = styled.img`
  height: ${({ size }) => size}px;
  width: ${({ size }) => size}px;
  margin: 0 10px;
`;

function Underline({ width, size, second, color }) {
  return (
    <UnderlineWrapper>
      <StyledSpan width={width} color={color} />
      <StyledIcon src={second ? mixerIcon : headIcon} size={size} />
      <StyledSpan width={width} color={color} />
    </UnderlineWrapper>
  );
}

Underline.propTypes = {
  width: PropTypes.number.isRequired,
  size: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  second: PropTypes.bool,
};

Underline.defaultProps = {
  second: false,
};

export default Underline;
