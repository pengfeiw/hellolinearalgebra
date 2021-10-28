import {DirectionalLight, PointLight, AmbientLight, HemisphereLight, SpotLight, RectAreaLight, MathUtils} from 'three';

function createAmbientLights() {
    const color = 0XFFFFFF;
    const intensity = 3.5;
    const light = new AmbientLight(color, intensity);
    return light;
}

function createHemisphereLights() {
    const skyColor = "white";  // light blue
    const groundColor = "gray";  // brownish orange
    const intensity = 3;
    const light = new HemisphereLight(skyColor, groundColor, intensity);

    light.position.set(-1, 0, 0);

    return light;
}

function createDirectionLights() {
    const light = new DirectionalLight('white', 10);
    light.castShadow = true;
    light.position.set(40, -5, 50);

    return light;
}

function createPointLights() {
    const light = new PointLight("white", 30);

    light.position.set(0, 10, 0);

    return light;
}

function createSpotLights() {
    const light = new SpotLight("white", 300);
    light.position.set(20, 20, 20);
    light.castShadow = true;
    return light;
}

function createRectAreaLights() {
    const color = 0xFFFFFF;
    const intensity = 5;
    const width = 12;
    const height = 4;
    const light = new RectAreaLight(color, intensity, width, height);
    light.position.set(0, 10, 0);
    light.rotation.x = MathUtils.degToRad(-90);

    return light;
}

export {createAmbientLights, createDirectionLights, createPointLights, createHemisphereLights, createSpotLights, createRectAreaLights};
