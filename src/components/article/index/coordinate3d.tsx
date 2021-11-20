import React, {useRef, useEffect} from "react";
// import {createWorld} from "src/three/world";
import {CoordinateBuilder} from "src/three/components/coordinate";
import {BasicWorld} from "src/three/world";
import {Box} from "@chakra-ui/react";
import DemoBox from "src/components/demoBox";

const CoordinateModel = () => {
    const [coordinate, setCoordinate] = React.useState<THREE.Group>();
    const [world, setWorld] = React.useState<BasicWorld>();
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const coordinateBuilder = new CoordinateBuilder();
        const coordinate = coordinateBuilder.createPlaneXYZ();
        setCoordinate(coordinate);

        const basicWorld = new BasicWorld();
        basicWorld.bgColor = "black";
        basicWorld.camera.position.z = 20;
        basicWorld.camera.position.y = 10;
        basicWorld.autoRotate = true;
        setWorld(basicWorld);
    }, []);

    useEffect(() => {
        const container = containerRef.current;
        if (container && coordinate && world) {
            world.render(container, [coordinate]);
        }
    }, [containerRef, world, coordinate]);

    return (
        <DemoBox>
            <Box ref={containerRef} h="100%" w="100%" />
        </DemoBox>
    );
};

export default CoordinateModel;
