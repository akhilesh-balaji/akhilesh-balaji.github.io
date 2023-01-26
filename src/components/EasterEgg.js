import { Box } from '@chakra-ui/react';
import { HiddenEasterEgg } from 'react-hidden-easter-egg';
import { ConfettiCanvas } from 'react-raining-confetti';

export default function EasterEgg() {
  return (
      <HiddenEasterEgg
        code={['c', 'o', 'n', 'f', 'e', 't', 't', 'i']}
        resetEggMs={10000}
      >
        <ConfettiCanvas active={true} stopAfterMs={5000} />{' '}
      </HiddenEasterEgg>
  );
}
