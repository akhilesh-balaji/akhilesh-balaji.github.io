import '@fontsource/inter/100.css';
import '@fontsource/inter/200.css';
import '@fontsource/inter/300.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import '@fontsource/inter/800.css';

import React from 'react';
import { ChakraProvider, Container } from '@chakra-ui/react';
import { useMediaQuery } from 'react-responsive';
import { HiddenEasterEgg } from 'react-hidden-easter-egg';
import { ConfettiCanvas } from 'react-raining-confetti';

import theme from '../theme/theme';
import Header from './Header';
import LandingPage from './LandingPage';
import Footer from './Footer';
import Work from './work/Work';
import Contact from './Contact';
import CodeQuantity from './CodeQuantity';

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
      >
        <HiddenEasterEgg
          code={['c', 'o', 'n', 'f', 'e', 't', 't', 'i']}
          resetEggMs={10000}
        >
          <ConfettiCanvas active={true} stopAfterMs={5000} />
        </HiddenEasterEgg>
        <Header />
        <LandingPage />
        <Work />
        <CodeQuantity />
        <Contact />
        <Footer />
      </Container>
    </ChakraProvider>
  );
}

export default App;
