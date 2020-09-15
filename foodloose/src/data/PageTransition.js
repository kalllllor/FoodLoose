export const PageTransition = {
  leftSide: {
    pageTransition: {
      duration: 1,
      stiffness: 0,
      ease: 'easeInOut',
    },
    pageVariants: {
      initial: {
        opacity: 1,
        y: '100vh',
      },
      in: {
        opacity: 1,
        y: 0,
      },
      out: {
        opacity: 1,
        y: '-100vh',
      },
    },
  },
  rightSide: {
    pageTransition: {
      duration: 1,
      stiffness: 0,
      ease: 'easeInOut',
    },
    pageVariants: {
      initial: {
        opacity: 1,
        y: '-100vh',
      },
      in: {
        opacity: 1,
        y: 0,
      },
      out: {
        opacity: 1,
        y: '100vh',
      },
    },
  },
};
