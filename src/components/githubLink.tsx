import React from "react"
import {IconButton, useColorMode} from "@chakra-ui/react"
import {GoMarkGithub} from "react-icons/go";
import {OutgoingLink} from "./link";

export const GithubLink: React.FC = ({
    ...props
}) => {
    const {colorMode} = useColorMode();
    return (
        <OutgoingLink href="https://github.com/pengfeiw/hellolinearalgebra">
            <IconButton
                aria-label={colorMode === "dark" ? "Dark Mode" : "Light Mode"}
                icon={<GoMarkGithub />}
                isRound
                {...props}
            />
        </OutgoingLink>
    );
};
