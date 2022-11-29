import { Center, Heading, Highlight, VStack, Image, Flex } from '@chakra-ui/react';
import GitHubCalendar from 'react-github-calendar';
import Status from './Status';
import Tools from './Tools';
import myImage from "../images/IMG_0836 Final.jpg"

export default function CodeQuantity() {
  return (
    <Center my={'100px'} id={"profile"}>
      <VStack>
        <Image src={myImage} width={"160px"} height={"auto"} mt={"20px"} borderRadius={"20px"} display={"none"} />
        <Heading fontSize={'3.5em'} fontWeight={'extrabold'} pb={"30px"}>
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
          hideMonthLabels
        />
        <Status />
        <Tools />
      </VStack>
    </Center>
  );
}
