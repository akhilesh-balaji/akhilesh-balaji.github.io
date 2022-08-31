import { FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';
import {
  Box,
  Flex,
  IconButton,
  Spacer,
  Text,
  Center
} from '@chakra-ui/react';

export default function Footer() {
    return (
        <Box my={'20px'} borderRadius={'xl'} borderWidth={'2px'} p={'10px'}>
          <Flex gap={"8px"}>
            <Center h="max-height">
            <Text fontSize={'1.1em'} fontWeight={'medium'} opacity={'60%'}>
              © Akhilesh Balaji, 2022. All rights reserved.
            </Text>
            </Center>
            <Spacer />
            <IconButton icon={<FaGithub />} />
            <IconButton icon={<FaLinkedin />} />
            <IconButton icon={<FaYoutube />} />
          </Flex>
        </Box>
    );
}