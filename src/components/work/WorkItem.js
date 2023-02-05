import {
  Box,
  Heading,
  Text,
  Badge,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  LinkOverlay,
  Link,
} from '@chakra-ui/react';

export default function WorkItem(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box
      minW={props.alFill ? "65.8%" : props.fill ? "99%" : "xs"}
      maxW={props.alFill ? "65.8%" : props.fill ? "99%" : "xs"}
      borderWidth="2px"
      borderRadius="lg"
      overflow="hidden"
      transition={'background-image 0.34s cubic-bezier(.08,.52,.52,1)'}
      cursor={'pointer'}
      data-group
      _hover={!props.blank ? {
        bgGradient: props.rbh ? 'linear-gradient(135deg, blue.400, rainbow.100, rainbow.200, rainbow.300, rainbow.500)'
 : 'linear-gradient(to-r, blue.300, blue.400)',
        color: 'brand.700',
        border: '2px',
        transition: 'background-image 0.34s cubic-bezier(.08,.52,.52,1)',
      } : {}}
    >
      <Box p={'6'} pos={'relative'} h={'180px'} onClick={!props.blank ? onOpen : void(0)} opacity={props.blank ? 0 : 1}>
        <Heading as="h2" fontSize={'1.5em'} fontWeight="bold">
          {props.workTitle}
        </Heading>
        <Text fontWeight={'medium'}>{props.workDesc}</Text>
        <Button
          pos={'absolute'}
          right={'5px'}
          bottom={'5px'}
          _groupHover={{ color: props.rbh ? 'rainbow.500' : 'blue.400', bg: 'brand.700' }}
          onClick={onOpen}
        >
          Read More
        </Button>
        <Badge
          colorScheme={'blue'}
          _groupHover={{ color: props.rbh ? 'rainbow.500' : 'blue.400', bg: 'brand.700' }}
          pos={'absolute'}
          right={'5px'}
          top={'5px'}
        >
          {props.workDate}
        </Badge>
      </Box>
      <Modal onClose={onClose} isOpen={isOpen} size={'xl'} isCentered>
        <ModalOverlay />
        <ModalContent
          bg={'#181825c4'}
          backdropFilter={"blur(10px)"}
          textAlign={'justify'}
          borderRadius={'xl'}
          borderWidth={'2px'}
        >
          <ModalHeader>{props.workTitle}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{props.workExtDesc}</ModalBody>
          <ModalFooter>
            <Link href={props.workLink}>
              <Button colorScheme="blue" variant={'outline'}>
                Open Link/s
              </Button>
            </Link>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}
