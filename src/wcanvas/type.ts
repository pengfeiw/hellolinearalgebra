
export type TextType = "stroke" | "fill";
export type TextAlign = Exclude<CanvasTextAlign, "start" | "end">;
export type TextDirection = Exclude<CanvasDirection, "inherit">;
export type TextBaseline = Exclude<CanvasTextBaseline, "alphabetic" | "ideographic" | "hanging">;
