import React from "react";
import {Box} from "@chakra-ui/react";

const DemoBox: React.FC<React.PropsWithChildren<any>> = ({children, ...props}) => {
    console.log(props);

    return (
        <Box
            h="500px"
            mt="20px"
            mb="20px"
            borderRadius="5px"
            overflow="hidden"
            {...props}
        >
            {children}
        </Box>
    );
}

export default DemoBox;
