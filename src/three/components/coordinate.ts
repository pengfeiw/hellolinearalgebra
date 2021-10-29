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
            new THREE.Vector3(-length / 2, 0, pos),
            new THREE.Vector3(length / 2, 0, pos),
        ];
        const points2 = [
            new THREE.Vector3(-length / 2, 0, -pos),
            new THREE.Vector3(length / 2, 0, -pos),
        ]
        const color = pos === 0 ? axisColor : planeColor;
        const material = new THREE.LineBasicMaterial({color});
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        const line = new THREE.Line(geometry, material);
        group.add(line)
        if (pos === 0) {
            // arrow
            const arrowGeometry = new THREE.CylinderGeometry(0, 1, 3);
            const arrowMaterial = new THREE.MeshBasicMaterial({color});
            const arrow = new THREE.Mesh(arrowGeometry, arrowMaterial);
            arrow.rotation.z = -THREE.MathUtils.degToRad(90);
            arrow.position.set(length / 2, 0, 0); 
            group.add(arrow);
        } else {
            const geometry2 = new THREE.BufferGeometry().setFromPoints(points2);
            const line2 = new THREE.Line(geometry2, material);
            group.add(line2)
        }
        pos++;
    }

    return group;
};

const createCoordinate = (length = 100) => {
    const xplane = createPlane(50, X_AXIS_COLOR);
    const yplane = createPlane(50, Y_AXIS_COLOR);
    const zplane = createPlane(50, Z_AXIS_COLOR);

    yplane.rotation.set(0, THREE.MathUtils.degToRad(90), THREE.MathUtils.degToRad(90));
    yplane.rotation.reorder("ZYX");
    zplane.rotation.set(0, -THREE.MathUtils.degToRad(90), 0);

    const group = new THREE.Group();
    group.add(xplane, yplane, zplane);
    group.rotation.x = THREE.MathUtils.degToRad(30);
    group.rotation.y = -THREE.MathUtils.degToRad(45);
    return group;
};

export {createCoordinate}
