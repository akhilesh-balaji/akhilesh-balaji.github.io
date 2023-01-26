import React, { useRef } from 'react';

import {
  Text,
  VStack,
  Center,
  Heading,
  Highlight,
  Image,
  Flex,
  Link,
} from '@chakra-ui/react';
import { useMediaQuery } from 'react-responsive';
import { motion } from 'framer-motion';

export default function LandingPage() {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)',
  });
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' });
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });
  console.log('Is Portrait? ' + isPortrait);
  console.log('Is Big Screen? ' + isBigScreen);

  const constraintsRef = useRef(null);

  return (
    <Center minH={'100vh'} px={'50px'} pos={'relative'} id={'landing'}>
      <VStack>
        <Text
          fontWeight={'bold'}
          fontSize={isPortrait === true ? '1.3em' : '2em'}
          width={'100%'}
          mb={'-20px'}
          pl={isPortrait === true ? '10px' : '20px'}
          opacity={0.8}
        >
          Greetings, it's me—
        </Text>
        <Heading
          fontSize={isBigScreen ? '9.3em' : isPortrait === true ? '5em' : '9em'}
          fontWeight={'black'}
          width={'100%'}
        >
          <Flex>
            <Highlight
              query={['Akhilesh', '.']}
              styles={{
                bgClip: 'text',
                bgGradient: 'linear-gradient(to-r, blue.300, blue.400)',
                pr: '20px',
              }}
            >
              Akhilesh Balaji
            </Highlight>
            <motion.div ref={constraintsRef}>
              <motion.div drag dragConstraints={constraintsRef}>
                <motion.div
                  initial={{ y: 0 }}
                  animate={{ y: -25 }}
                  transition={{
                    repeat: Infinity,
                    repeatType: 'mirror',
                    type: 'tween',
                    stiffness: 260,
                    damping: 20,
                  }}
                  style={{
                    paddingBottom: '10px',
                    cursor: 'grab',
                  }}
                >
                  <Highlight
                    query={'.'}
                    styles={{
                      bgClip: 'text',
                      bgGradient: 'linear-gradient(to-r, blue.300, blue.400)',
                      mb: '20px',
                    }}
                  >
                    .
                  </Highlight>
                </motion.div>
              </motion.div>
            </motion.div>
          </Flex>
        </Heading>
        <Text fontSize={'1.2em'} align={'justify'}>
          <Highlight
            query={[
              'science, technology, and scientific literacy',
              'fundamental questions about the universe',
              'quest for knowledge',
              'he who knows all the answers has not been asked all the questions',
            ]}
            styles={{
              bgClip: 'text',
              bgGradient: 'linear-gradient(to-r, blue.300, blue.400)',
              fontWeight: 'bold',
            }}
          >
            I'm a high school student studying in Neev Academy, India, who is
            intrigued by science, technology, and scientific literacy. I believe
            that answering fundamental questions about the universe should be
            one of on humanity's priority list. The quest for knowledge will
            never truly be over, but as time and science progress, the gap
            between our questions and their answers will be closed. Summed up in
            the insightful words of the Chinese philosopher Confucius, “He who
            knows all the answers has not been asked all the questions.”
          </Highlight>
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
        <Link href="#work" textDecoration={"none"} _hover={{textDecoration: "none", transform: "translateY(-20px)"}}>Scroll for More</Link>
      </Text>
    </Center>
  );
}
