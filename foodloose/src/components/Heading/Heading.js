import styled from 'styled-components';

const Heading = styled.h1`
  font-size: ${({ theme, big }) => (big ? theme.fontSize.xl : theme.fontSize.l)};
  font-weight: ${({ theme, big }) => (big ? theme.bold : theme.light)};
  color: ${({ theme }) => theme.grey100};
  margin: 0;
`;

export default Heading;
