import React from "react";
import {Flex, HStack, useColorMode, Text, IconButton} from "@chakra-ui/react";
import AvatarSvg from "./avatar";
import {ColorModeSwitch} from "src/components/colorModeSwitch";
import {GithubLink} from "src/components/githubLink";
import {AccentPicker} from "src/components/accent";

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
                <AccentPicker
                    aria-label="Accent Color Picker"
                    zIndex={1}
                />
                <ColorModeSwitch />
            </HStack>
        </Flex>
    );
};

export default Header;
