import React from 'react';
import PropTypes from 'prop-types';
import { AnimatePresence } from 'framer-motion';
import { Switch, useLocation } from 'react-router-dom';

function AnimatedRoutes({ children, exitBeforeEnter, initial }) {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter={exitBeforeEnter} initial={initial}>
      <Switch location={location} key={location.pathname}>
        {children}
      </Switch>
    </AnimatePresence>
  );
}

AnimatedRoutes.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
  exitBeforeEnter: PropTypes.bool,
  initial: PropTypes.bool,
};

AnimatedRoutes.defaultProps = {
  exitBeforeEnter: false,
  initial: false,
};

export default AnimatedRoutes;
