import * as THREE from "three";

const X_AXIS_COLOR = "red";
const Y_AXIS_COLOR = "green";
const Z_AXIS_COLOR = "blue";

/**
 * 创建一个平面
 * @param axisLen 轴长 
 * @param markLen 刻度线长
 * @param axisColor 轴颜色
 * @param markColor 刻度线颜色
 */
const createPlane = (axisLen = 100, markLen = 100, twoMarkPlane = false, axisColor = "red" as THREE.ColorRepresentation, markColor = "lightGray") => {
    const group = new THREE.Group();
    // axis
    const axisPointLeft = new THREE.Vector3(-axisLen / 2, 0, 0);
    const axisPointRight = new THREE.Vector3(axisLen / 2, 0, 0);
    const axisMaterial = new THREE.LineBasicMaterial({color: axisColor});
    const axisGeometry = new THREE.BufferGeometry().setFromPoints([axisPointLeft, axisPointRight]);
    const axisLine = new THREE.Line(axisGeometry, axisMaterial);
    const arrowGeometry = new THREE.CylinderGeometry(0, 0.5, 1);
    const arrowMaterial = new THREE.MeshBasicMaterial({color: axisColor});
    const arrow = new THREE.Mesh(arrowGeometry, arrowMaterial);
    arrow.rotation.z = -THREE.MathUtils.degToRad(90);
    arrow.position.set(axisLen / 2, 0, 0);
    group.add(axisLine, arrow);


    // mark
    if (markLen > 0) {
        let pos = 1;
        const markMaterial = new THREE.LineBasicMaterial({color: markColor});
        while (pos <= axisLen / 2) {
            if (twoMarkPlane) {
                // mark line 1
                const points1 = [
                    new THREE.Vector3(pos, 0, -markLen / 2),
                    new THREE.Vector3(pos, 0, markLen / 2)
                ];

                // mark line 2
                const points2 = [
                    new THREE.Vector3(-pos, 0, -markLen / 2),
                    new THREE.Vector3(-pos, 0, markLen / 2)
                ];

                const geometry1 = new THREE.BufferGeometry().setFromPoints(points1);
                const geometry2 = new THREE.BufferGeometry().setFromPoints(points2);

                const line1 = new THREE.Line(geometry1, markMaterial);
                const line2 = new THREE.Line(geometry2, markMaterial);

                group.add(line1, line2);
            }


            // mark line3
            const points3 = [
                new THREE.Vector3(pos, -markLen / 2, 0),
                new THREE.Vector3(pos, markLen / 2, 0)
            ]
            // mark line4
            const points4 = [
                new THREE.Vector3(-pos, -markLen / 2, 0),
                new THREE.Vector3(-pos, markLen / 2, 0)
            ]
            const geometry3 = new THREE.BufferGeometry().setFromPoints(points3);
            const geometry4 = new THREE.BufferGeometry().setFromPoints(points4);
            const line3 = new THREE.Line(geometry3, markMaterial);
            const line4 = new THREE.Line(geometry4, markMaterial);
            group.add(line3, line4);
            pos++;
        }
    }

    return group;
};

class CoordinateBuilder {
    public xLength = 10;
    public yLength = 10;
    public zLength = 10;
    public markLen = 10;
    public set length(length: number) {
        this.xLength = length;
        this.yLength = length;
        this.zLength = length;
    }

    /**
     * create x plane
     */
    public createPlaneX() {
        const xplane = createPlane(this.xLength, this.markLen, false, X_AXIS_COLOR);
        const group = new THREE.Group();
        group.add(xplane);
        return group;
    }

    /**
     * create xy plane
     */
    public createPlaneXY() {
        const group = this.createPlaneX();
        const yplane = createPlane(this.yLength, this.markLen, false, Y_AXIS_COLOR);
        yplane.rotation.set(0, 0, THREE.MathUtils.degToRad(90));
        group.add(yplane);
        return group;
    }

    /**
     * create xyz plane
     */
    public createPlaneXYZ() {
        const xplane = createPlane(this.xLength, this.markLen, true, X_AXIS_COLOR);
        const group = new THREE.Group();
        group.add(xplane);

        const yplane = createPlane(this.yLength, this.markLen, true, Y_AXIS_COLOR);
        yplane.rotation.set(0, THREE.MathUtils.degToRad(90), THREE.MathUtils.degToRad(90));
        yplane.rotation.reorder("YXZ");
        group.add(yplane);

        const zplane = createPlane(this.zLength, this.markLen, true, Z_AXIS_COLOR);
        zplane.rotation.set(0, -THREE.MathUtils.degToRad(90), 0);
        group.add(zplane);
        return group;
    }
}

export {CoordinateBuilder}
