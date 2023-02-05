import '@fontsource/inter/100.css';
import '@fontsource/inter/200.css';
import '@fontsource/inter/300.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import '@fontsource/inter/800.css';

import React from 'react';
import { Box, ChakraProvider, Container } from '@chakra-ui/react';
import { useMediaQuery } from 'react-responsive';

import theme from '../theme/theme';
import Header from './Header';
import LandingPage from './LandingPage';
import Footer from './Footer';
import Work from './work/Work';
import Contact from './Contact';
import CodeQuantity from './CodeQuantity';
import ScrollFade from './ScrollFade';
import EasterEgg from './EasterEgg';
import ScrollToTop from './ScrollToTop';

function App() {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)',
  });
  const isBigScreen = useMediaQuery({ query: '(min-width: 1280px)' });
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });
  console.log(isBigScreen);

  return (
    <ChakraProvider theme={theme}>
      <Container
        maxW={'container.xl'}
        fontSize={!isBigScreen ? '0.88em' : '1em'}
        overflowX={'clip'}
      >
        <EasterEgg />
        <ScrollToTop />
        <Header />
        <LandingPage />
        <Box>
          <ScrollFade>
            <Work />
          </ScrollFade>
          <ScrollFade>
            <CodeQuantity />
          </ScrollFade>
          <Contact />
        </Box>
        <Footer />
      </Container>
    </ChakraProvider>
  );
}

export default App;
