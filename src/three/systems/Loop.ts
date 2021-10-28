import {Camera, Clock, Scene, WebGLRenderer} from 'three';

class Loop {
    private clock = new Clock(); 
    public camera: Camera;
    public scene: Scene;
    public renderer: WebGLRenderer;
    public updatables: any[];
    constructor(camera: Camera, scene: Scene, renderer: WebGLRenderer) {
        this.camera = camera;
        this.scene = scene;
        this.renderer = renderer;
        this.updatables = [];
    }

    // 通过ThreeJS animation loop，循环渲染，制作动画
    start() {
        this.renderer.setAnimationLoop(() => {
            this.tick();
            // render a frame
            this.renderer.render(this.scene, this.camera);
        });
    }

    stop() {
        this.renderer.setAnimationLoop(null);
    }

    tick() {
        const delta = this.clock.getDelta();
        for (const object of this.updatables) {
            object.tick(delta);
        }
    }
}

export {Loop}
