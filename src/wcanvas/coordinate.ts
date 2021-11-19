import Vector2d from "./Vector2d";

interface Polar2d {
    length: number;
    angle: number;
}

/**
 * convert cartesian coordinates to polar coordinates
 */
export const convertCartesianToPolar = (p: Vector2d): Polar2d => {
    const length = Math.sqrt(p.x * p.x + p.y * p.y);
    const angle = Math.atan(p.y / p.x);
    return {length, angle};
};

/**
 * convert polar coordinates to cartesian coordinates
 */
export const convertPolarToCartesian = (p: Polar2d): Vector2d => {
    const x = Math.sin(p.angle) * p.length;
    const y = Math.cos(p.angle) * p.length;

    return new Vector2d(x, y);
};

/**
 * rotate point by origin
 * @param p cartesian point
 * @param angle routate angle in radians
 */
export const rotateCartesian = (p: Vector2d, angle: number) => {
    const polarP = convertCartesianToPolar(p);
    polarP.angle += angle;

    return convertPolarToCartesian(polarP); 
}
