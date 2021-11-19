import Entity, {Line} from "../Entity";

class Coordinate {
    public xAxisColor = "red";
    public yAxisColor = "green";
    public lineColor = "gray";
    public gridLen = 5;
    public gridSize = 1;
    public xl: number;
    public yl: number;
    public constructor(xlen = 10, ylen = 10) {
        this.xl = xlen;
        this.yl = ylen;
    }
    
    public getEntitys() {
        
    }
}

export default Coordinate;
