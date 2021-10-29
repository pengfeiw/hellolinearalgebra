import * as THREE from "three";

const createCube = () => {
    const geometry = new THREE.BoxBufferGeometry(20, 20, 20);
    const material = new THREE.MeshBasicMaterial({color: "red"});
    const cube = new THREE.Mesh(geometry, material);

    return cube;
};

export {createCube}
