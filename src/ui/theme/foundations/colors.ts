import {ThemeOverride, useColorModeValue} from "@chakra-ui/react"
import {transparentize} from "@chakra-ui/theme-tools"

// https://www.tailwindcss.cn/docs/customizing-colors
// 以下颜色使用themera工具生成：https://themera.vercel.app/
const tailwindColors = {
    gray: {
        50: "#fcfeff",
        100: "#f7fafc",
        200: "#edf2f7",
        300: "#e2e8f0",
        400: "#cbd5e0",
        500: "#a0aec0",
        600: "#718096",
        700: "#4a5568",
        800: "#2d3748",
        900: "#1a202c"
    },
    red: {
        50: "#fffafa",
        100: "#fff5f5",
        200: "#fed7d7",
        300: "#feb2b2",
        400: "#fc8181",
        500: "#f56565",
        600: "#e53e3e",
        700: "#c53030",
        800: "#9b2c2c",
        900: "#742a2a"
    },
    orange: {
        50: "#fffdfa",
        100: "#fffaf0",
        200: "#feebc8",
        300: "#fbd38d",
        400: "#f6ad55",
        500: "#ed8936",
        600: "#dd6b20",
        700: "#c05621",
        800: "#9c4221",
        900: "#7b341e"
    },
    yellow: {
        50: "#fffffa",
        100: "#fffff0",
        200: "#fefcbf",
        300: "#faf089",
        400: "#f6e05e",
        500: "#ecc94b",
        600: "#d69e2e",
        700: "#b7791f",
        800: "#975a16",
        900: "#744210"
    },
    green: {
        50: "#fafffb",
        100: "#f0fff4",
        200: "#c6f6d5",
        300: "#9ae6b4",
        400: "#68d391",
        500: "#48bb78",
        600: "#38a169",
        700: "#2f855a",
        800: "#276749",
        900: "#22543d"
    },
    teal: {
        50: "#fafffe",
        100: "#e6fffa",
        200: "#b2f5ea",
        300: "#81e6d9",
        400: "#4fd1c5",
        500: "#38b2ac",
        600: "#319795",
        700: "#2c7a7b",
        800: "#285e61",
        900: "#234e52"
    },
    blue: {
        50: "#fafdff",
        100: "#ebf8ff",
        200: "#bee3f8",
        300: "#90cdf4",
        400: "#63b3ed",
        500: "#4299e1",
        600: "#3182ce",
        700: "#2b6cb0",
        800: "#2c5282",
        900: "#2a4365"
    },
    indigo: {
        50: "#f9fbff",
        100: "#ebf4ff",
        200: "#c3dafe",
        300: "#a3bffa",
        400: "#7f9cf5",
        500: "#667eea",
        600: "#5a67d8",
        700: "#4c51bf",
        800: "#434190",
        900: "#3c366b"
    },
    purple: {
        50: "#fcfaff",
        100: "#faf5ff",
        200: "#e9d8fd",
        300: "#d6bcfa",
        400: "#b794f4",
        500: "#9f7aea",
        600: "#805ad5",
        700: "#6b46c1",
        800: "#553c9a",
        900: "#44337a"
    },
    pink: {
        50: "#fffafb",
        100: "#fff5f7",
        200: "#fed7e2",
        300: "#fbb6ce",
        400: "#f687b3",
        500: "#ed64a6",
        600: "#d53f8c",
        700: "#b83280",
        800: "#97266d",
        900: "#702459"
    }
};

export const linkColors = {
    light: "accent.500",
    dark: "accent.400",
    visitedLight: "accent.300",
    visitedDark: "accent.600"
}

export function useLinkColor() {
    return useColorModeValue(linkColors.light, linkColors.dark)
}

export function useVisitedLinkColor() {
    return useColorModeValue(linkColors.visitedLight, linkColors.visitedDark)
}

export function getTagBackgroundDark(
    accentKey: ColorKeys,
    theme: ThemeOverride
) {
    return transparentize((theme.colors as any)[accentKey][200], 0.1)(theme)
}

export const colors = {
    defaultAccent: {
        50: "#e3f2fc",
        100: "#ddf2ff",
        200: "#abd2fc",
        300: "#5daafc",
        400: "#1a85ff",
        500: "#006be6",
        600: "#0053b4",
        700: "#003b82",
        800: "#002451",
        900: "#000d21"
    },
    accent: {
        // See src/components/Accent.tsx for CSS variable definition
        50: "var(--colors-accent-50)",
        100: "var(--colors-accent-100)",
        200: "var(--colors-accent-200)",
        300: "var(--colors-accent-300)",
        400: "var(--colors-accent-400)",
        500: "var(--colors-accent-500)",
        600: "var(--colors-accent-600)",
        700: "var(--colors-accent-700)",
        800: "var(--colors-accent-800)",
        900: "var(--colors-accent-900)"
    },
    ...tailwindColors
}

export type ColorKeys = "defaultAccent" | "gray" | "red" | "orange" | "yellow" | "green" | "teal" | "blue" | "indigo" | "cyan" | "purple" | "pink";

export const accentKeys: ColorKeys[] = ["defaultAccent", "gray", "red", "orange", "yellow", "green", "teal", "blue", "indigo", "cyan", "purple", "pink"];
