import * as THREE from "three";
import {createCamera} from "./basic/camera";
import {createScene} from "./basic/scene";
import {createAmbientLights} from "./basic/lights";
import {createRenderer} from "./systems/renderer";
import {Resizer} from "./systems/Resizer";
import {Loop} from "./systems/Loop";
import {createControls} from "./systems/controls";

interface WorldMesh extends THREE.Object3D {
    tick?: () => void;
}

export const createWorld = (container: Element,
    meshs: WorldMesh[],
    backgroundColor = "skyblue" as THREE.ColorRepresentation,
    renderer = createRenderer(),
    lights = [createAmbientLights() as THREE.Light],
    camera = createCamera()
) => {
    const scene = createScene(backgroundColor);
    container.append(renderer.domElement);
    const controls = createControls(camera, renderer.domElement);
    controls.enableDamping = true;
    
    scene.add(...lights, ...meshs);
    meshs.forEach((mesh) => {
        if (mesh.tick) {
            loop.updatables.push(mesh);
        }
    })

    const loop = new Loop(camera, scene, renderer);
    loop.updatables.push(controls);
    new Resizer(container, camera, renderer);
    loop.start();
};
