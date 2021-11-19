const measureText = (ctx: CanvasRenderingContext2D, text: string): {w: number; h: number} => {
    const textMetrics = ctx.measureText(text);
    // const height = textMetrics.fontBoundingBoxAscent + textMetrics.fontBoundingBoxDescent; // the height of bounding box
    const height = textMetrics.actualBoundingBoxAscent  + textMetrics.actualBoundingBoxDescent ; // the height of bounding box
    const {width} = textMetrics; // the width of bounding box

    return {
        w: width,
        h: height
    };
};

export {measureText}
