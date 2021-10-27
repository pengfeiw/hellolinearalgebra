import React from "react";
import {Flex, HStack, useColorMode, Text, IconButton} from "@chakra-ui/react";
import AvatarSvg from "./avatar";
import {ColorModeSwitch} from "../colorModeSwitch";
import {GithubLink} from "../githubLink";

const Header: React.FC = () => {
    const {colorMode, toggleColorMode} = useColorMode();

    return (
        <Flex flexDirection="row" justifyContent="space-between">
            <HStack alignItems="end" gridColumnGap="10px">
                <a href="http://www.pengfeixc.com" target="_blank">
                    <AvatarSvg fillColor={colorMode === "light" ? "#9b2c2c" : "#fed7d7"} />
                </a>
                <Text fontSize="18px" fontWeight="bold">Hello, Linear Algebra!</Text>
            </HStack>
            <HStack>
                <GithubLink />
                <ColorModeSwitch />
            </HStack>
        </Flex>
    );
};

export default Header;
