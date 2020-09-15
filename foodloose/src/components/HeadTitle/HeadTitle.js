import styled from 'styled-components';
import background from 'assets/icons/sign.svg';

const HeadTitle = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 300px;
  height: 100px;
  background-image: url(${background});
  background-color: rgba(255, 238, 226, 0.5);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  z-index: 9999;
  border-radius: 3px;

  @media (max-width: 1280px) {
    width: 100%;
  }
`;

export default HeadTitle;
