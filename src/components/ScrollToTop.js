import React, { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { Box, IconButton, Tooltip } from '@chakra-ui/react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 700) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <Box position={"fixed"}>
      {isVisible && (
        <Box p={'10px'}>
          <Tooltip label="Back to Top" rounded={'md'} placement="left">
            <IconButton
              icon={<FaArrowUp />}
              size="lg"
              borderRadius={"xl"}
              aria-label="Add image"
              onClick={scrollToTop}
              position={'fixed'}
              bottom="16px"
              right="16px"
              variant={'solid'}
              colorScheme={'blue'}
              bgGradient={'linear(to-br, blue.300, blue.200, blue.300)'}
              textColor={'brand.700'}
              bgSize={'300% 100%'}
              transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
              _hover={{
                bgPos: '100% 0',
                transition: 'all 0.2s cubic-bezier(.08,.52,.52,1)',
              }}
            />
          </Tooltip>
        </Box>
      )}
    </Box>
  );
}
