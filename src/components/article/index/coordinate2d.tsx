import React, {useRef, useEffect} from "react";
import Coordinate from "src/wcanvas/components/coordinate";
import WCanvas from "src/wcanvas/WCanvas";
import {Box} from "@chakra-ui/react";
import Entity from "src/wcanvas/Entity";

const CoordinateModel = () => {
    const [entities, setEntities] = React.useState<Entity[]>([]);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const coord2d = new Coordinate();
        const entities = coord2d.getEntities();
        setEntities(entities);
    }, []);

    useEffect(() => {
        const container = canvasRef.current;
        if (container) {
            const wcanvas = new WCanvas(container);
            entities.forEach((ent) => wcanvas.addEntity(ent));
            wcanvas.viewAll();
        }
    }, [canvasRef, entities]);

    return (
        <Box
            h="500px"
            mt="20px"
            mb="20px"
        >
            <canvas ref={canvasRef} style={{height: "100%", width: "100%"}} />
        </Box>
    );
};

export default CoordinateModel;
