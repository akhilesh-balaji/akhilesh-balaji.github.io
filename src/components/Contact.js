import {
  Box,
  Center,
  Heading,
  Highlight,
  Link,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useMediaQuery } from 'react-responsive';

export default function Contact() {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)',
  });
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' });
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });
  return (
    <Box borderWidth={0} borderRadius={'xl'} p={'20px'} id={"contact"}>
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
            <Link
              color={'blue.200'}
              href={'mailto:akhilesh.balaji.bangalore@gmail.com'}
            >
              <Heading fontSize={'2em'}>
                {isPortrait
                  ? 'Reach out by 📧!'
                  : 'akhilesh.balaji.bangalore@gmail.com'}
              </Heading>
            </Link>
          </Center>
        </VStack>
      </Center>
    </Box>
  );
}
