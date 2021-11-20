import Entity, {Line, Polyline} from "../Entity";
import Vector2d from "../Vector2d";

class Coordinate {
    public xAxisColor = "red";
    public yAxisColor = "green";
    public lineColor = "gray";
    public unitSize = 1;
    /** the positive x len */
    public xlp: number;
    /** the negitive x len */
    public xln: number;
    /** the positive y len */
    public ylp: number;
    /** the negitive y len */
    public yln: number;
    public constructor(xlen = 10, ylen = 10) {
        this.xlp = xlen;
        this.xln = xlen;
        this.ylp = ylen;
        this.yln = ylen;
    }
    public getEntities() {
        const ents: Entity[] = [];
        const xmin = -this.xln - 1;
        const xmax = this.xlp + 1;
        const ymin = -this.yln - 1;
        const ymax = this.ylp + 1;

        // x axis
        const xp1 = new Vector2d(xmin, 0);
        const xp2 = new Vector2d(xmax, 0);
        const xAxisLine = new Line(xp1, xp2);
        xAxisLine.color = this.xAxisColor;
        ents.push(xAxisLine);

        const xArrowP1 = new Vector2d(xmax, 0);
        const xArrowP2 = new Vector2d(xmax - 0.5, - 0.15);
        const xArrowP3 = new Vector2d(xmax - 0.5, 0.15);
        const xAxisArrow = new Polyline(xArrowP1, xArrowP2, xArrowP3);
        xAxisArrow.fillColor = this.xAxisColor;
        xAxisArrow.closed = true;
        xAxisArrow.stroked = false;
        xAxisArrow.filled = true;
        ents.push(xAxisArrow);

        // x gridLine
        for (let i = this.unitSize; i <= this.ylp; i += this.unitSize) {
            const xGridStart = new Vector2d(xmin, i);
            const xGridEnd = new Vector2d(xmax, i);

            const xGridLine = new Line(xGridStart, xGridEnd);
            xGridLine.color = this.lineColor;
            ents.push(xGridLine);
        }

        for (let i = -this.unitSize; i >= -this.yln; i -= this.unitSize) {
            const xGridStart = new Vector2d(xmin, i);
            const xGridEnd = new Vector2d(xmax, i);

            const xGridLine = new Line(xGridStart, xGridEnd);
            xGridLine.color = this.lineColor;
            ents.push(xGridLine);
        }

        // y axis
        const yp1 = new Vector2d(0, ymin);
        const yp2 = new Vector2d(0, ymax);
        const yAxisLine = new Line(yp1, yp2);
        yAxisLine.color = this.yAxisColor;
        ents.push(yAxisLine);

        const yArrowP1 = new Vector2d(0, ymax);
        const yArrowP2 = new Vector2d(-0.15, ymax - 0.5);
        const yArrowP3 = new Vector2d(0.15, ymax - 0.5);
        const yAxisArrow = new Polyline(yArrowP1, yArrowP2, yArrowP3);
        yAxisArrow.fillColor = this.yAxisColor;
        yAxisArrow.closed = true;
        yAxisArrow.stroked = false;
        yAxisArrow.filled = true;
        ents.push(yAxisArrow);

        // y gridLine
        for (let i = this.unitSize; i <= this.xlp; i += this.unitSize) {
            const yGridStart = new Vector2d(i, ymin);
            const yGridEnd = new Vector2d(i, ymax);

            const yGridLine = new Line(yGridStart, yGridEnd);
            yGridLine.color = this.lineColor;
            ents.push(yGridLine);
        }

        for (let i = -this.unitSize; i >= -this.yln; i -= this.unitSize) {
            const yGridStart = new Vector2d(i, ymin);
            const yGridEnd = new Vector2d(i, ymax);

            const yGridLine = new Line(yGridStart, yGridEnd);
            yGridLine.color = this.lineColor;
            ents.push(yGridLine);
        }


        return ents;
    }
}

export default Coordinate;
