import * as THREE from "three";

const X_AXIS_COLOR = "red";
const Y_AXIS_COLOR = "green";
const Z_AXIS_COLOR = "blue";

const createPlane = (length = 100, axisColor = "red" as THREE.ColorRepresentation, planeColor = "lightGray") => {
    const halfLen = length / 2;
    const group = new THREE.Group();
    let pos = 0;
    while (pos < halfLen) {
        const points = [
            new THREE.Vector3(),
            new THREE.Vector3(),
        ];

        const color = pos === 0 ? axisColor : planeColor;
        const material = new THREE.LineBasicMaterial({color});
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        const line = new THREE.Line(geometry, material);
        group.add(line)
        pos++;
    }

    return group;
};

const createCoordinate = (length = 100) => {
    const xplane = createPlane(100, X_AXIS_COLOR);
    const yplane = createPlane(100, Y_AXIS_COLOR);
    const zplane = createPlane(100, Z_AXIS_COLOR);

    yplane.rotation.order = "ZYX";
    yplane.rotation.set(0, THREE.MathUtils.degToRad(90), THREE.MathUtils.degToRad(90));

    zplane.rotation.set(0, THREE.MathUtils.degToRad(90), 0);

    const group = new THREE.Group();
    group.add(xplane, yplane, zplane);

    return group;
};

export {createCoordinate}
