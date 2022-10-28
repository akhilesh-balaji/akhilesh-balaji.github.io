import React from "react";

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  IconButton,
  Text,
  Image,
  Box,
  useDisclosure,
  Tooltip,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import logo from '../images/logo/AB (8).png';

export default function HamburgerMenu(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <Box position={"fixed"}>
      <Tooltip label={"Menu"} placement={"auto"} borderRadius={"5px"}>
        <IconButton ref={btnRef} onClick={onOpen} icon={<HamburgerIcon />} position={"fixed"} right={"6%"} top={"15px"} />
      </Tooltip>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bg={"#181825"} h={"fit-content"} w={"fit-content"} borderRadius={"lg"} m={"10px"} >
          <DrawerCloseButton />
          <DrawerHeader fontSize={"1.4em"}>
            <Image src={logo} h={'35px'} w={'auto'} />
          </DrawerHeader>

          <DrawerBody textDecor={"underline"} fontSize={"1.1em"}>
            <Box p={"10px"} borderWidth={"2px"} borderRadius={"lg"}>
                {props.children}
            </Box>
          </DrawerBody>

          <DrawerFooter>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
