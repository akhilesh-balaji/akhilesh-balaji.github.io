import { VStack, Badge, Wrap, Center } from '@chakra-ui/react';

export default function WorkSection(props) {
  return (
    <VStack
      p={'10px'}
      pos={'relative'}
      borderWidth={'2px'}
      borderRadius={'xl'}
      maxW={'1000px'}
    >
      <Badge
        pos={'absolute'}
        top={'-7px'}
        left={'10px'}
        zIndex={90}
        colorScheme="blue"
        bgGradient={'linear-gradient(to-r, blue.300, blue.400)'}
        color={'brand.700'}
      >
        {props.sectionTitle}
      </Badge>
      <Center>
        <Wrap>
          {props.children}
        </Wrap>
      </Center>
    </VStack>
  );
}
