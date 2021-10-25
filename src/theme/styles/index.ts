import React from "react";

// 主题色
export type ColorStyles = "gray" | "red" | "orange" | "yellow" | "green" | "teal" | "blue" | "cyan" | "purple" | "pink";

export const getSelectBgColor = (color: ColorStyles, mode: "light" | "dark") => {
    if (mode === "light") {
        switch (color) {
            case "gray":
                return "#EDF2F7";
            case "red":
                return "#FED7D7";
            case "orange":
                return "#FEEBC8";
            case "yellow":
                return "#FEFCBF";
            case "green":
                return "#C6F6D5";
            case "teal":
                return "#B2F5EA";
            case "blue":
                return "#BEE3F8";
            case "cyan":
                return "#C4F1F9";
            case "purple":
                return "#E9D8FD"
            case "pink":
                return "#FED7E2";
            default:
                break;
        }
    } else {
        switch (color) {
            case "gray":
                return "#4c545e";
            case "red":
                return "#9B2C2C";
            case "orange":
                return "#9C4221";
            case "yellow":
                return "#975A16";
            case "green":
                return "#276749";
            case "teal":
                return "#285E61";
            case "blue":
                return "#2C5282";
            case "cyan":
                return "#0987A0";
            case "purple":
                return "#553C9A"
            case "pink":
                return "#97266D";
            default:
                break;
        }
    }
};

export const styles = (color: ColorStyles) => ({
    global: ({colorMode}: {colorMode: "dark" | "light"}) => ({
        body: {
            bg: colorMode === "dark" ? "#303841" : "white",
        },
        a: {
            _hover: {
                textDecoration: "underline"
            }
        },
        "a.chakra-link": {
            color: getSelectBgColor(color, colorMode === "light" ? "dark" : "light"),
            _hover: {
                textDecoration: "underline"
            }
        },
        blockquote: {
            borderLeftColor: colorMode === "light" ? "#cbd5e0" : "rgb(113, 128, 150)",
            borderLeftWidth: "4px",
            borderRadius: "2px",
            paddingLeft: "16px"
        },
        ".markdown-body pre": {
            // bg: colorMode === "dark" ? "#10151e" : "#282923"
            bg: "#10151e",
        },
        // 设置inline代码块的颜色，但是排除代码段落（代码段落的样式由hightlight确定）
        ".markdown-body *:not(pre) code": {
            background: colorMode === "light" ? "#f7fafc" : "rgba(237, 242, 247, 0.16)",
            color: colorMode === "light" ? "#4a5568" : "rgb(226, 232, 240)"
        },
        // markdown链接样式
        ".markdown-body a": {
            color: getSelectBgColor(color, colorMode === "dark" ? "light" : "dark")
        },
        // markdown内部引用样式
        ".markdown-body blockquote": {
            borderLeftColor: colorMode === "light" ? "#cbd5e0" : "rgb(113, 128, 150)"
        },
        // markdown的表格样式
        ".markdown-body table td,.markdown-body table th": {
            border: "1px solid #dfe2e5"
        },
        ".markdown-body table tr": {
            borderTop: "1px solid #c6cbd1"
        },
        "*": {
            _selection: {
                bg: getSelectBgColor(color, colorMode)
            }
        },
        // 评论部分
        ".comment blockquote": {
            background: colorMode === "light" ? "#cbd5e0" : "rgb(113, 128, 150)",
            padding: "10px",
            borderRadius: "5px",
            marginBottom: "5px"
        }
    })
});

export const ColorStyleContext = React.createContext<{color: ColorStyles; changeColor: (color: ColorStyles) => void}>({
    color: "teal",
    changeColor: (color: ColorStyles) => { }
});

/** 可更改的主题色 */
export const colors: ColorStyles[] = ["gray", "red", "orange", "green", "teal", "blue", "cyan", "purple", "pink"];

export const localStorageColorKey = "pengfeixc-color";
