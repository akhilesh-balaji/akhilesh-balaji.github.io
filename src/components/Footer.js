import { FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';
import {
  Box,
  Flex,
  IconButton,
  Spacer,
  Text,
  Center,
  Link,
  Highlight
} from '@chakra-ui/react';

export default function Footer() {
  return (
    <Box my={'20px'} borderRadius={'xl'} borderWidth={'2px'} p={'12px'}>
      <Flex gap={'8px'}>
        <Center h="max-height">
          <Text fontSize={'1.1em'} fontWeight={'medium'} opacity={'60%'}>
            {' '}
            <Highlight
              query={'Akhilesh Balaji'}
              styles={{
                bgClip: 'text',
                bgGradient: 'linear-gradient(to-r, blue.300, blue.400)',
                fontWeight: "bold",
                opacity: "500% !important"
              }}
            >
              ©Akhilesh Balaji, 2022. All rights reserved.
            </Highlight>
          </Text>{' '}
        </Center>{' '}
        <Spacer />
        <Link href={'https://github.com/akhilesh-balaji'}>
          <IconButton icon={<FaGithub />} />{' '}
        </Link>{' '}
        <Link href={'https://www.linkedin.com/in/akhilesh-balaji/'}>
          <IconButton icon={<FaLinkedin />} />{' '}
        </Link>{' '}
        <Link href={'https://www.youtube.com/@akhilesh-balaji'}>
          <IconButton icon={<FaYoutube />} />{' '}
        </Link>{' '}
      </Flex>{' '}
    </Box>
  );
}
