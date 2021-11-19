import CoordTransform from "./CoordTransform";
import IEntity from "./Entity";
import Rectangle from "./Rectangle";
import Vector2d from "./Vector2d";

class WCanvas {
    private _canvas: HTMLCanvasElement;
    public get canvas() {
        return this._canvas;
    }
    public entities: IEntity[] = [];
    private _ctx: CanvasRenderingContext2D | null = null;
    private ctf = new CoordTransform();
    public viewAllMargin = 5;
    public constructor(canvas: HTMLCanvasElement, enableControl = true) {
        this._canvas = canvas;
        const resizeCanvas = () => {
            canvas.width = canvas.clientWidth;
            canvas.height = canvas.clientHeight;
        }
        resizeCanvas();
        canvas.addEventListener("resize", resizeCanvas);

        if (enableControl) {
            this.initControl();
        }
    }
    public addEntity(entity: IEntity) {
        this.entities.push(entity);
    }
    public update() {
        if (!this._canvas) {
            return;
        }

        if (!this._ctx) {
            this._ctx = this._canvas.getContext("2d");
        }
        this._ctx!.clearRect(0, 0, this._canvas.clientWidth, this._canvas.clientHeight);
        this.ctf.setCtx(this._ctx!);
        this.entities.forEach((ent) => {
            ent.draw(this._ctx!, this.ctf)
        });
        this._ctx!.resetTransform();
    }

    private initControl() {
        let leftButtonDown = false;
        const MouseButton = {
            left: 0,
            middle: 1,
            right: 2
        };

        // disable right click menu
        this._canvas.oncontextmenu = () => {
            return false;
        };
        this._canvas.addEventListener("mousedown", (event: MouseEvent) => {
            if (event.button === MouseButton.left) {
                leftButtonDown = true;
            }
        });
        this._canvas.addEventListener("mouseup", (event: MouseEvent) => {
            if (event.button === MouseButton.left) {
                leftButtonDown = false;
            } else if (event.button === MouseButton.right) {
                event.preventDefault();
            }
        });

        this._canvas.addEventListener("mousemove", (event) => {
            if (leftButtonDown) {
                this.ctf.displace(event.movementX, event.movementY);
                this.update();
            }
        });
        this._canvas.addEventListener("wheel", (event) => {
            this.ctf.zoom(new Vector2d(event.offsetX, event.offsetY), event.deltaY, event.deltaY);
            this.update();
        });
        this._canvas.addEventListener("dblclick", (event) => {
            if (event.button === 0) {

                const viewport = new Rectangle(
                    new Vector2d(this.viewAllMargin, this.viewAllMargin),
                    new Vector2d(this.canvas.width - this.viewAllMargin, this.canvas.height - this.viewAllMargin)
                );

                this.ctf.viewAllInContainer(
                    viewport,
                    this.bound());

                this.update();
            }
        });
    }
    public bound() {
        const bounds: Rectangle[] = [];
        for (let i = 0; i < this.entities.length; i++) {
            bounds.push(this.entities[i].getBound());
        }
        return Rectangle.union(bounds);
    }
}

export default WCanvas
