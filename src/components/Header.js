import {
  Box,
  Button,
  Center,
  Flex,
  Image,
  Link,
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
          <Link href={props.to}>
            <Button variant={'ghost'}>
              <Text fontSize={'1.2em'}> {props.text} </Text>{' '}
            </Button>{' '}
          </Link>{' '}
        </VStack>
      );
    }
    return (
      <Center h={'35px'}>
        <Link href={props.to}>
          <Button variant={'ghost'}>
            <Text fontSize={'1.2em'}> {props.text} </Text>{' '}
          </Button>{' '}
        </Link>{' '}
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
        transform={"translate(-50%,0%)"}
        left={"50%"}
        w={'max-width'}
        borderRadius={'xl'}
        borderWidth={'2px'}
        p={'15px'}
        zIndex={100}
        bg={'#04041296'}
        backdropFilter={"blur(10px)"}
      >
        <Flex gap={'10px'}>
          <a href="#landing">
            <Image src={logo} h={'35px'} w={'auto'} />{' '}
          </a>{' '}
          <HeaderItem text={'About'} to={'#landing'} />{' '}
          <HeaderItem text={'Work'} to={'#work'} />{' '}
          <HeaderItem text={'Profile'} to={'#profile'} />{' '}
          <HeaderItem text={'Contact'} to={'#contact'} />{' '}
          <HeaderItem text={'Articles'} to={'https://www.thegeekly.net/'} />{' '}
        </Flex>{' '}
      </Box>
    );
  } else {
    return (
      <Box
        p={'8px'}
        bg={'brand.700'}
        minH={'55px'}
        mt={'8px'}
        borderRadius={'xl'}
        borderWidth={'2px'}
        minW={'92vw'}
        zIndex={100}
        pos={'fixed'}
        top={'5px'}
      >
        <Image src={logo} h={'35px'} w={'auto'} position={'fixed'} />{' '}
        <HamburgerMenu>
          <HeaderItem noCenter text={'About'} to={'#landing'} />{' '}
          <HeaderItem noCenter text={'Work'} to={'#work'} />{' '}
          <HeaderItem noCenter text={'Profile'} to={'#profile'} />{' '}
          <HeaderItem noCenter text={'Contact'} to={'#contact'} />{' '}
          <HeaderItem
            noCenter
            text={'Articles'}
            to={'https://www.thegeekly.net/'}
          />{' '}
        </HamburgerMenu>{' '}
      </Box>
    );
  }
}
