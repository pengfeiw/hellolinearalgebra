import React from "react";
import {Flex, HStack, Text} from "@chakra-ui/react";
import AvatarSvg from "./avatar";
import {ColorModeSwitch} from "src/components/colorModeSwitch";
import {GithubLink} from "src/components/githubLink";
import {AccentPicker} from "src/components/accent";
import {OutgoingLink} from "src/components/link";

const Header: React.FC = () => {
    return (
        <Flex flexDirection="row" justifyContent="space-between" mb="40px" wrap="wrap" gridRowGap="15px" gridColumnGap="15px">
            <HStack alignItems="end" gridColumnGap="10px">
                <OutgoingLink href="http://www.pengfeixc.com" target="_blank">
                    <AvatarSvg />
                </OutgoingLink>
                <Text fontSize="17px" fontWeight="bold">你好，线性代数</Text>
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
