import * as THREE from "three";
import {createCamera} from "./basic/camera";
import {createScene} from "./basic/scene";
import {createRenderer} from "./systems/renderer";
import {Resizer} from "./systems/Resizer";
import {Loop} from "./systems/Loop";
import {createControls} from "./systems/controls";

interface WorldMesh extends THREE.Object3D {
    tick?: () => void;
}

export class BasicWorld {
    private _bgColor = "skyblue";
    private _camera = createCamera();
    private _renderer = createRenderer();
    public autoRotate = false;
    public set bgColor(color: string) {
        this._bgColor = color;
    }
    public set camera(camera: THREE.PerspectiveCamera) {
        this._camera = camera;
    }
    public get camera() {
        return this._camera;
    }

    public render(container: Element, meshs: WorldMesh[], ) {
        const scene = createScene(this._bgColor);
        container.append(this._renderer.domElement);
        const controls = createControls(this._camera, this._renderer.domElement);
        controls.enableDamping = true;
        controls.autoRotate = this.autoRotate;
        scene.add(...meshs);

        const loop = new Loop(this._camera, scene, this._renderer);
        loop.updatables.push(controls);
        new Resizer(container, this._camera, this._renderer);
        loop.start();
    }
}
