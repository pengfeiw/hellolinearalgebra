import Rectangle from "./Rectangle";
import Vector2d from "./Vector2d";

class CoordTransform {
    public scaleX = 1;
    public scaleY = 1;
    public worldOri = new Vector2d(0, 0);
    public set(worldOri: Vector2d, scaleX: number, scaleY: number) {
        this.worldOri = worldOri;
        this.scaleX = scaleX;
        this.scaleY = scaleY;
    }

    public zoom(mousePos: Vector2d, deltaX: number, deltaY: number) {
        const wcsMousePos = this.dcsToWcs(mousePos);
        const scalarx = 1 - deltaX / 1000;
        const scalary = 1 - deltaY / 1000;

        const scaleX = this.scaleX * scalarx;
        const scaleY = this.scaleY * scalary;

        const dx = wcsMousePos.x * scaleX;
        const dy = wcsMousePos.y * scaleY;
        const worldOri = new Vector2d(mousePos.x - dx, mousePos.y - dy);

        this.set(worldOri, scaleX, scaleY);
    }

    public displace(x: number, y: number) {
        this.worldOri.x += x;
        this.worldOri.y += y;
    }

    public reset() {
        this.scaleX = 1;
        this.scaleY = 1;
        this.worldOri = new Vector2d(0, 0);
    }

    public dcsToWcs(p: Vector2d) {
        const x = (p.x - this.worldOri.x) * 1 / this.scaleX;
        const y = (p.y - this.worldOri.y) * 1 / this.scaleY;
        const wcs_p = new Vector2d(x, y);
        return wcs_p;
    }

    public setCtx(ctx: CanvasRenderingContext2D) {
        ctx.translate(this.worldOri.x, this.worldOri.y);
        ctx.scale(this.scaleX, this.scaleY);
    }

    public viewAllInContainer(container: Rectangle, itemsBound: Rectangle) {
        const ratio1 = container.width / itemsBound.width;
        const ratio2 = container.height / itemsBound.height;
        const ratio = Math.min(ratio1, ratio2);

        const worldOri = new Vector2d(
            container.leftTop.x + container.width / 2 - itemsBound.center.x * ratio,
            container.leftTop.y + container.height / 2 - itemsBound.center.y * ratio
        );

        this.set(worldOri, ratio, ratio);
    }
}

export default CoordTransform;
