import React, {FC} from "react";
import {Box} from "@chakra-ui/react";

interface Props {
    raw: string; 
}

const RawHtml: FC<Props> = (props) => {
    const {raw} = props;

    if (!raw) {
        return <></>;
    }
    return (
        <Box dangerouslySetInnerHTML={{__html: raw}}></Box>
    )
};

export default RawHtml;
