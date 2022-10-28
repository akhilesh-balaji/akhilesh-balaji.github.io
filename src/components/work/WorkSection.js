import { VStack, Badge, Wrap, Center } from '@chakra-ui/react';
import variants from '../../scrollTransition';
import { motion } from 'framer-motion';

export default function WorkSection(props) {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      variants={variants}
      viewport={{ once: true, amount: 0.8 }}
    >
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
          <Wrap>{props.children}</Wrap>
        </Center>
      </VStack>
    </motion.div>
  );
}
