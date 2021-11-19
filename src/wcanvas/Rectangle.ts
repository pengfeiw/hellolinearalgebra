import Vector2d from "./Vector2d";

class Rectangle {
    public leftTop: Vector2d;
    public rightDown: Vector2d;
    public get rightTop() {
        return new Vector2d(this.rightDown.x, this.leftTop.y);
    }
    public get leftDown() {
        return new Vector2d(this.leftTop.x, this.rightDown.y);
    }
    public get center() {
        return new Vector2d((this.leftTop.x + this.rightDown.x) / 2, (this.leftTop.y + this.rightDown.y) / 2);
    }
    public get width() {
        return this.rightDown.x - this.leftTop.x;
    }
    public get height() {
        return this.rightDown.y - this.leftTop.y;
    }
    public constructor(leftTop = new Vector2d(), rightDown = new Vector2d()) {
        this.leftTop = leftTop;
        this.rightDown = rightDown;
    }

    public static union(rects: Rectangle[]) {
        let minx = 0,
            miny = 0,
            maxx = 0,
            maxy = 0;
        if (rects.length > 0) {
            minx = rects[0].leftTop.x;
            miny = rects[0].leftTop.y;
            maxx = rects[0].rightDown.x;
            maxy = rects[0].rightDown.y;
        }
        for (let i = 0; i < rects.length; i++) {
            minx = Math.min(minx, rects[i].leftTop.x);
            miny = Math.min(miny, rects[i].leftTop.y);
            maxx = Math.max(maxx, rects[i].rightDown.x);
            maxy = Math.max(maxy, rects[i].rightDown.y);
        }

        return new Rectangle(new Vector2d(minx, miny), new Vector2d(maxx, maxy));
    }
}

export default Rectangle;
