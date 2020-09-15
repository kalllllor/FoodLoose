import React, { Component } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LoadingView from 'views/LoadingView';
import GlobalStyle from 'theme/GlobalStyle';
import MainTemplate from 'templates/MainTemplate';
import HeadTitle from 'components/HeadTitle/HeadTitle';
import DotBar from 'components/DotBar/DotBar';
import SetsView from './SetsView';

class Root extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
    };
  }

  componentDidMount() {
    setTimeout(
      function () {
        this.setState({ isLoading: false });
      }.bind(this),
      5000,
    );
  }
  // const [products, setProducts] = useState(null);

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     const { products } = await request(
  //       'https://api-eu-central-1.graphcms.com/v2/ckect5ect24hb01ys23v2gbfb/master',
  //       `
  //       {
  //         sets {
  //           title
  //           titleExtension
  //           description
  //           color {
  //             css
  //           }
  //           pictures {
  //             id
  //           }
  //           numberOfPeople
  //           listOfRecipes {
  //             name
  //             type
  //             parts {
  //               name
  //               ingredients
  //               preparation
  //             }
  //           }
  //         }
  //       }
  //   `,
  //     );

  //     setProducts(products);
  //   };

  //   fetchProducts();
  // }, []);

  // console.log(products);
  render() {
    const { isLoading } = this.state;
    return (
      <MainTemplate>
        <AnimatePresence exitBeforeEnter initial>
          {isLoading ? (
            <LoadingView />
          ) : (
            <motion.div
              transition={{
                duration: 0.5,
                stiffness: 0,
                ease: 'easeInOut',
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {' '}
              <HeadTitle />
              <GlobalStyle />
              <DotBar />
              <SetsView />{' '}
            </motion.div>
          )}
        </AnimatePresence>
      </MainTemplate>
    );
  }
}

export default Root;
