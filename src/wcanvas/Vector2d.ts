import * as GeoMath from "./geometry";

class Vector2d {
    public x: number;
    public y: number;
    public constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
    public static equal(vec1: Vector2d, vec2: Vector2d, accuracy = 0) {
        if (GeoMath.distanceBetweenPoints(vec1, vec2) <= accuracy) {
            return true;
        } else {
            return false;
        }
    }
}

export default Vector2d;
