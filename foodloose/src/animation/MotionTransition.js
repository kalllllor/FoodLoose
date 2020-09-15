import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { PageTransition } from 'data/PageTransition';

function MotionTransition({ children, side, uni }) {
  return (
    <motion.div
      key={uni + side}
      initial="initial"
      animate="in"
      exit="out"
      variants={PageTransition[side].pageVariants}
      transition={PageTransition[side].pageTransition}
    >
      {children}
    </motion.div>
  );
}

MotionTransition.propTypes = {
  children: PropTypes.element.isRequired,
  side: PropTypes.oneOf(['leftSide', 'rightSide']).isRequired,
  uni: PropTypes.string.isRequired,
};

export default MotionTransition;
