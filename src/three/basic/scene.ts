import {Color, Scene, ColorRepresentation} from 'three';

function createScene(bgColor: ColorRepresentation) {
    const scene = new Scene();

    scene.background = new Color(bgColor);

    return scene;
}

export {createScene};
