import React, {useRef, useEffect} from "react";
import {createWorld} from "src/three/world";
import {createCoordinate} from "src/three/components/coordinate";
import {Box} from "@chakra-ui/react";

const CoordinateModel = () => {
    const [coordinate] = React.useState(createCoordinate());
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (container) {
            createWorld(container, [coordinate])
        }
    }, [containerRef]);

    return (
        <Box
            ref={containerRef}
            h="500px"
        />
    );
};

export default CoordinateModel;
