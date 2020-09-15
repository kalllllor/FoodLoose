import React, { Component } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

import headIcon from 'assets/icons/head.svg';
import plateIcon from 'assets/icons/plate.svg';
import potIcon from 'assets/icons/pot.svg';
import dessertIcon from 'assets/icons/dessert.svg';
import mixerIcon from 'assets/icons/mixer.svg';

const icons = [headIcon, plateIcon, potIcon, dessertIcon, mixerIcon];

const animation = {
  transition: {
    duration: 0.2,
    stiffness: 0,
    ease: 'easeInOut',
  },
  variants: {
    initial: {
      opacity: 0,
      x: '-50px',
    },
    in: {
      opacity: 1,
      x: 0,
    },
    out: {
      opacity: 0,
      x: '50px',
    },
  },
};

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  position: absolute;
  background-color: ${({ theme }) => theme.primary};

  img {
    display: inline-block;
    position: absolute;
    top: calc(50% - 50px);
    left: calc(50% - 50px);
    width: 100px;
    height: 100px;
  }
`;

class LoadingView extends Component {
  constructor() {
    super();
    this.state = {
      length: icons.length,
      imgIndex: 0,
    };
  }

  componentDidMount() {
    setInterval(() => {
      const { length, imgIndex } = this.state;
      if (imgIndex < length - 1) {
        this.setState(({ imgIndex }) => ({
          imgIndex: imgIndex + 1,
        }));
      } else {
        this.setState({ imgIndex: 0 });
      }
    }, 1000);
  }

  render() {
    const { imgIndex } = this.state;

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={animation.transition}
      >
        <Wrapper>
          <AnimatePresence exitBeforeEnter>
            <motion.img
              key={imgIndex}
              src={icons[imgIndex]}
              alt="loadingIcon"
              variants={animation.variants}
              transition={animation.transition}
              initial="initial"
              animate="in"
              exit="out"
            />
          </AnimatePresence>
        </Wrapper>
      </motion.div>
    );
  }
}

export default LoadingView;
