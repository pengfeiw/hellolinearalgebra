import {ThemeOverride, useColorModeValue} from "@chakra-ui/react"
import {transparentize} from "@chakra-ui/theme-tools"

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
    }
}

export type ColorKeys = "defaultAccent" | "orange" | "green" | "orange" | "teal" | "blue" | "cyan" | "purple" | "pink";

export const accentKeys: ColorKeys[] = ["defaultAccent", "orange", "green", "orange", "teal", "blue", "cyan", "purple", "pink"];
