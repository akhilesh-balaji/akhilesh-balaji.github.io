import {
  Text,
  VStack,
  Center,
  Heading,
  Highlight,
  Image,
} from '@chakra-ui/react';
import { useMediaQuery } from 'react-responsive';

export default function LandingPage() {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)',
  });
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' });
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });
  console.log('Is Portrait? ' + isPortrait);
  console.log('Is Big Screen? ' + isBigScreen);

  return (
    <Center minH={'100vh'} px={'50px'} pos={'relative'}>
      <VStack>
        <Text
          fontWeight={'bold'}
          fontSize={isPortrait === true ? "1.3em" : '2em'}
          width={'100%'}
          mb={'-20px'}
          pl={isPortrait === true ? "10px" : '20px'}
          opacity={0.8}
        >
          Greetings, it's me—
        </Text>
        <Heading
          fontSize={isBigScreen ? '9.3em' : isPortrait === true ? '5em' : '9em'}
          fontWeight={'black'}
          width={'100%'}
        >
          <Highlight
            query={['Akhilesh', '.']}
            styles={{
              bgClip: 'text',
              bgGradient: 'linear-gradient(to-r, blue.300, blue.400)',
            }}
          >
            Akhilesh Balaji.
          </Highlight>
        </Heading>
        <Text fontSize={'1.2em'} align={'justify'}>
          I'm a high school student studying in Neev Academy, India, who is
          passionate about science, technology, and scientific literacy. I
          believe that answering fundamental questions about the universe should
          be one of on humanity's priority list. The quest for knowledge will
          never truly be over, but as time and science progress, the gap between
          our questions and their answers will be closed. Summed up in the
          insightful words of the Chinese philosopher Confucius, “He who knows
          all the answers has not been asked all the questions.”
        </Text>
      </VStack>
      <Text
        opacity={'70%'}
        fontSize={'1.2em'}
        fontWeight={'semibold'}
        borderBottom={'3px solid white'}
        pb={'2px'}
        pt={'80px'}
        pos={'absolute'}
        bottom={'5%'}
      >
        Scroll for More
      </Text>
    </Center>
  );
}
