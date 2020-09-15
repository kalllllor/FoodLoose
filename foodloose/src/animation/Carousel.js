import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { AnimatePresence, motion } from 'framer-motion';

const variants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

const CarouselWrapper = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      length: props.images.length,
      imageIndex: 0,
    };
  }

  componentDidMount() {
    setInterval(() => {
      const { length, imageIndex } = this.state;
      if (imageIndex < length - 1) {
        this.setState(({ imageIndex }) => ({
          imageIndex: imageIndex + 1,
        }));
      } else {
        this.setState({ imageIndex: 0 });
      }
    }, 3000);
  }

  render() {
    const { length, imageIndex } = this.state;
    const { images } = this.props;
    if (length === 1) {
      return (
        <CarouselWrapper>
          <motion.img src={`${images[0]}`} />
        </CarouselWrapper>
      );
    } else {
      return (
        <CarouselWrapper>
          <AnimatePresence>
            <motion.img
              key={`img-${images[imageIndex]}`}
              src={images[imageIndex]}
              variants={variants}
              initial="initial"
              animate="in"
              exit="exit"
              transition={{
                duration: 1,
                stiffness: 0,
                ease: 'easeInOut',
              }}
            />
          </AnimatePresence>
        </CarouselWrapper>
      );
    }
  }
}

Carousel.propTypes = {
  images: PropTypes.array.isRequired,
};

export default Carousel;
