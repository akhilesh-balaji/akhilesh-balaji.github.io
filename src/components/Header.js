import { Box, Button, Center, Flex, Image, Spacer, Text } from "@chakra-ui/react";

import logo from "../images/logo/AB (8).png";

export default function Header() {
    function HeaderItem(props) {
        return (
            <Center h={"35px"}>
                <Button variant={"ghost"}>
                    <Text fontSize={"1.2em"}>{props.text}</Text>
                </Button>
            </Center>
        );
    }
    return (
        <Box mt={"20px"} fontWeight={"semibold"} fontSize={"1.2em"} pos={"fixed"} w={"max-width"} borderRadius={"xl"} borderWidth={"2px"} p={"15px"} zIndex={100} bg={"brand.700"}>
          <Flex gap={"10px"}>
            <Image src={logo} h={"35px"} w={"auto"} />
            <HeaderItem text={"About"} />
            <HeaderItem text={"Work"} />
            <HeaderItem text={"Profile"} />
            <HeaderItem text={"Contact"} />
            <HeaderItem text={"Articles"} />
          </Flex>
        </Box>
    );
}