import CoordTransform from "./CoordTransform";
import Rectangle from "./Rectangle";
import {measureText} from "./util";
import Vector2d from "./Vector2d";
import {TextType, TextDirection, TextBaseline, TextAlign} from "./type";

export interface IEntity {
    color: string;
    draw(ctx: CanvasRenderingContext2D, ctf: CoordTransform): void;
    getBound(): Rectangle;
}

abstract class Entity implements IEntity {
    public color = "white";
    public boundColor = "gray";
    public bounded = false;
    public draw(ctx: CanvasRenderingContext2D, ctf: CoordTransform) {
        this.drawContent(ctx, ctf);
        if (this.bounded) {
            this.drawBound(ctx, ctf);
        }
    }
    public abstract drawContent(ctx: CanvasRenderingContext2D, ctf: CoordTransform): void;
    public drawBound(ctx: CanvasRenderingContext2D, ctf: CoordTransform): void {
        const bound = this.getBound();
        ctx.beginPath();
        ctx.strokeStyle = this.boundColor;
        ctx.moveTo(bound.leftTop.x, bound.leftTop.y);
        ctx.lineTo(bound.rightTop.x, bound.rightTop.y);
        ctx.lineTo(bound.rightDown.x, bound.rightDown.y);
        ctx.lineTo(bound.leftDown.x, bound.leftDown.y);
        ctx.closePath();
        ctx.lineWidth /= ctf.scaleX;
        ctx.stroke();
        ctx.lineWidth *= ctf.scaleX;
    }
    abstract getBound(): Rectangle;
}

class Line extends Entity {
    public start: Vector2d;
    public end: Vector2d;
    public lineWidth = 1;
    public constructor(start = new Vector2d(), end = new Vector2d()) {
        super();
        this.start = start;
        this.end = end;
    }
    public drawContent(ctx: CanvasRenderingContext2D, ctf: CoordTransform): void {
        ctx.beginPath();
        ctx.strokeStyle = this.color;
        ctx.lineWidth = this.lineWidth;
        const p1 = this.start;
        const p2 = this.end;
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);

        // draw fixed line width
        ctx.lineWidth /= ctf.scaleX;
        ctx.stroke();
        ctx.lineWidth *= ctf.scaleX;
    }

    public getBound(): Rectangle {
        const minx = Math.min(this.start.x, this.end.x);
        const miny = Math.min(this.start.y, this.end.y);
        const maxx = Math.max(this.start.x, this.end.x);
        const maxy = Math.max(this.start.y, this.end.y);
        return new Rectangle(
            new Vector2d(minx, miny),
            new Vector2d(maxx, maxy)
        );
    }
}


class Text extends Entity {
    public text: string;
    public position: Vector2d;
    public font = "";
    public type: TextType = "fill";
    public align: TextAlign = "left";
    public direction: TextDirection = "ltr";
    public baseLine: TextBaseline = "top";
    public constructor(text: string, position = new Vector2d(0, 0)) {
        super();
        this.text = text;
        this.position = position;
    }
    public drawContent(ctx: CanvasRenderingContext2D, ctf: CoordTransform): void {
        this.initCtx(ctx);
        // const dcsPosition = ctf.wcsToDcs(this.position);
        const dcsPosition = this.position;
        switch (this.type) {
            case "fill":
                ctx.fillStyle = this.color;
                ctx.fillText(this.text, dcsPosition.x, dcsPosition.y);
                break;
            case "stroke":
                ctx.strokeStyle = this.color;
                ctx.strokeText(this.text, dcsPosition.x, dcsPosition.y);
                break;
            default:
                throw new Error(`UNKNOW_TEXT_TYPE: type '${this.type}' is not a valid TextType`);
        }
    }
    getBound(): Rectangle {
        const canvas = document.createElement("canvas") as HTMLCanvasElement;
        const ctx = canvas.getContext("2d");
        if (ctx) {
            this.initCtx(ctx);
            const {w, h} = measureText(ctx, this.text);
            let x = this.position.x, y = this.position.y;
            switch (this.align) {
                case "left":
                    break;
                case "center":
                    x -= w * 0.5;
                    break;
                case "right":
                    x -= w;
                    break;
                default:
                    break;
            }
            switch (this.baseLine) {
                case "bottom":
                    y -= h;
                    break;
                case "middle":
                    y -= h * 0.5;
                    break;
                case "top":
                    break;
                default:
                    break;
            }

            return new Rectangle(
                new Vector2d(x, y),
                new Vector2d(x + w, y + h)
            );
        }

        return new Rectangle();
    }

    private initCtx(ctx: CanvasRenderingContext2D) {
        ctx.font = this.font;
        ctx.textAlign = this.align;
        ctx.direction = this.direction;
        ctx.textBaseline = this.baseLine;
    }
}

export {Line, Text};
export default Entity;
