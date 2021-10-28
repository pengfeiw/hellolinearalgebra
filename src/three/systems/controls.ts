import * as THREE from 'three';
// import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';

function createControls(camera: THREE.Camera, canvas: HTMLElement) {
    const OrbitControls = require("three/examples/jsm/controls/OrbitControls").OrbitControls;
    const control = new OrbitControls(camera, canvas);
    // control.autoRotate = true;
    // control.autoRotateSpeed = 5;
    // control.minDistance = 5;
    // control.maxDistance = 20;
    // control.enableKeys = true;
    // control.minAzimuthAngle = - Infinity; // default
    // control.maxAzimuthAngle = Infinity; // default
    // control.minPolarAngle = 0; // default
    // control.maxPolarAngle = Math.PI; // default
    (control as any).tick = () => {
        control.update();
    }

    return control;
}

export {createControls};
