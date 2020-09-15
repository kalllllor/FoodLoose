import styled from 'styled-components';

const Paragraph = styled.p`
  font-size: ${({ theme, big }) => (big ? theme.fontSize.xl : theme.fontSize.m)};
  font-weight: ${({ theme }) => theme.regular};
  letter-spacing: 2px;
`;

export default Paragraph;
