import React from "react"
import {IconButton, useColorMode} from "@chakra-ui/react"
import {GoMarkGithub} from "react-icons/go";

export const GithubLink: React.FC = ({
    ...props
}) => {
    const {colorMode} = useColorMode()
    return (
        <a href="https://github.com/pengfeiw" target="_blank">
            <IconButton
                aria-label={colorMode === "dark" ? "Dark Mode" : "Light Mode"}
                icon={<GoMarkGithub />}
                isRound
                {...props}
            />
        </a>
    );
};
