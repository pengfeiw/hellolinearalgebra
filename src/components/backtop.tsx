import React, {useEffect, useState} from "react";
import {Button} from "@chakra-ui/react";
import {ChevronUpIcon} from "@chakra-ui/icons";
import {useLinkColor} from "src/ui/theme";

const BackTop = () => {
    const [visible, setVisible] = useState<boolean>(false);

    useEffect(() => {
        window.addEventListener("scroll", toggleVisible);
    }, []);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;

        if (scrolled > 300) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <Button onClick={scrollToTop} display={visible ? "inline" : "none"} position="fixed" right="3em" bottom="4em" >
            <ChevronUpIcon color={useLinkColor()} />
        </Button>
    );
};

export default BackTop;
