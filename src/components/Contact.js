import {
  Box,
  Center,
  Heading,
  Highlight,
  Link,
  Text,
  VStack,
} from '@chakra-ui/react';

export default function Contact() {
  return (
    <Box borderWidth={0} borderRadius={'xl'} p={'20px'}>
      <Center>
        <VStack>
          <Heading fontSize={'3.5em'} fontWeight={'extrabold'}>
            <Highlight
              query={'Contact'}
              styles={{
                bgGradient: 'linear-gradient(to-r, blue.300, blue.400)',
                bgClip: 'text',
              }}
            >
              Contact Me
            </Highlight>
          </Heading>
          <Center>
              <Link opacity={0.7} href={"mailto:akhilesh.balaji.bangalore@gmail.com"}>
                <Heading fontSize={"2em"}>akhilesh.balaji.bangalore@gmail.com</Heading>
              </Link>
          </Center>
        </VStack>
      </Center>
    </Box>
  );
}
