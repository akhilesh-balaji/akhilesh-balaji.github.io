import { Center, Heading, Highlight, VStack, Image, Flex } from '@chakra-ui/react';
import GitHubCalendar from 'react-github-calendar';
import Status from './Status';
import Tools from './Tools';

export default function CodeQuantity() {
  return (
    <Center my={'100px'}>
      <VStack>
        <Heading fontSize={'3.5em'} fontWeight={'extrabold'}>
          <Highlight
            query={'Profile'}
            styles={{
              bgGradient: 'linear-gradient(to-r, blue.300, blue.400)',
              bgClip: 'text',
            }}
          >
            My Profile
          </Highlight>
        </Heading>
        <GitHubCalendar
          username="akhilesh-balaji"
          blockSize={15}
          blockMargin={5}
          color="#236AF9"
          fontSize={16}
        />
        <Status />
        <Tools />
      </VStack>
    </Center>
  );
}
