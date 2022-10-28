import {
  Box,
  Button,
  Center,
  Flex,
  Image,
  Spacer,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useMediaQuery } from 'react-responsive';

import logo from '../images/logo/AB (8).png';
import HamburgerMenu from './HamburgerMenu';

export default function Header() {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)',
  });
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' });
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });
  function HeaderItem(props) {
    if (props.noCenter) {
      return (
        <VStack alignItems={'start'}>
          <Button variant={'ghost'}>
            <Text fontSize={'1.2em'}>{props.text}</Text>
          </Button>
        </VStack>
      );
    }
    return (
      <Center h={'35px'}>
        <Button variant={'ghost'}>
          <Text fontSize={'1.2em'}>{props.text}</Text>
        </Button>
      </Center>
    );
  }
  if (!isPortrait) {
    return (
      <Box
        mt={'20px'}
        fontWeight={'semibold'}
        fontSize={'1.2em'}
        pos={'fixed'}
        w={'max-width'}
        borderRadius={'xl'}
        borderWidth={'2px'}
        p={'15px'}
        zIndex={100}
        bg={'brand.700'}
      >
        <Flex gap={'10px'}>
          <Image src={logo} h={'35px'} w={'auto'} />
          <HeaderItem text={'About'} />
          <HeaderItem text={'Work'} />
          <HeaderItem text={'Profile'} />
          <HeaderItem text={'Contact'} />
          <HeaderItem text={'Articles'} />
        </Flex>
      </Box>
    );
  } else {
    return (
      <Box
        p={'8px'}
        bg={'brand.700'}
        minH={'55px'}
        mt={"8px"}
        borderRadius={'xl'}
        borderWidth={'2px'}
        minW={'92vw'}
        zIndex={100}
        pos={'fixed'}
      >
        <Image src={logo} h={'35px'} w={'auto'} position={'fixed'} />
        <HamburgerMenu>
          <HeaderItem noCenter text={'About'} />
          <HeaderItem noCenter text={'Work'} />
          <HeaderItem noCenter text={'Profile'} />
          <HeaderItem noCenter text={'Contact'} />
          <HeaderItem noCenter text={'Articles'} />
        </HamburgerMenu>
      </Box>
    );
  }
}
