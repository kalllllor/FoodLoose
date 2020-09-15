import styled from 'styled-components';
import { darken } from 'polished';

const Button = styled.button`
  position: relative;
  padding: 20px 30px;
  background-color: ${({ activeColor }) => darken(0.2, `${activeColor}`)};
  cursor: pointer;
  color: ${({ theme }) => theme.black};
  border: none;
  font-family: 'Amatic SC', cursive;
  font-weight: 700;
  font-size: 20px;
  border-radius: 3px;
  text-transform: uppercase;
  transition: 0.2s all;
  top: 0;
  &:hover {
    background-color: ${({ activeColor }) => darken(0.3, `${activeColor}`)};
    transform: translateY(5px);
  }

  &:focus {
    outline: none;
  }

  text-decoration: none;
`;

export default Button;
