import { Box, Center, Heading, Highlight, VStack } from '@chakra-ui/react';

import Awards from './Awards';
import Projects from './Projects';
import Courses from './Courses';

export default function Work() {
  return (
    <Box borderWidth={0} borderRadius={'xl'} p={'20px'} id={'work'}>
      <Center>
        <VStack>
          <Heading fontSize={'3.5em'} fontWeight={'extrabold'}>
            <Highlight
              query={'Work'}
              styles={{
                bgGradient: 'linear-gradient(to-r, blue.300, blue.400)',
                bgClip: 'text',
              }}
            >
              My Work
            </Highlight>
          </Heading>
          <Center>
            <VStack gap={'10px'}>
              <Awards />
              <Projects />
              <Courses />
            </VStack>
          </Center>
        </VStack>
      </Center>
    </Box>
  );
}
