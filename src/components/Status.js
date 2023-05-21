import React from 'react';
import { Text, Heading, Box } from '@chakra-ui/react';
import TypeWriter from 'react-typewriter';

export default class Status extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      typing: 1,
    };
    this.handleOnTypingChange = this.handleOnTypingChange.bind(this);
  }
  handleOnTypingChange() {
    setTimeout(function(){
    this.setState(prevState => ({ typing: -1 * prevState.typing }));}.bind(this), 700)
  }
  render() {
    return (
      <Box>
          <Heading fontSize={'2.2em'} fontWeight={'bold'} display={"flex"}>
            I'm Currently Learning About  
            <TypeWriter
              typing={this.state.typing}
              onTypingEnd={this.handleOnTypingChange}
            >
              <Text
                fontWeight={'extrabold'}
                pl={"5px"}
                bgGradient={'linear-gradient(to-r, blue.300, blue.400)'}
                bgClip={'text'}
              >
                Quantum Computing
              </Text>
            </TypeWriter>
            <blink>|</blink>
          </Heading>
      </Box>
    );
  }
}
