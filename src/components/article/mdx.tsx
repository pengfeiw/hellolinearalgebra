import {OutgoingLink, RouteLink} from "src/components/link";
import {
    Badge,
    BadgeProps,
    Box,
    BoxProps,
    Code,
    Divider,
    Image,
    Kbd,
    List,
    ListItem,
    Text,
    useColorModeValue
} from "@chakra-ui/react"
import React from "react"
import * as Typography from "src/components/primitives/typography"
import {theme, useLinkColor} from "src/ui/theme"

const linkStyles = {
    "& code": {
        color: "currentColor"
    },
    "&:hover code": {
        textDecoration: "underline"
    }
}

const InlineCode: React.FC<BoxProps> = p => (
    <Code
        fontSize="0.85em"
        fontWeight="medium"
        color={useColorModeValue("gray.700", "gray.300")}
        px={1}
        rounded="md"
        {...p}
    />
)

export const mdxComponents: any = {
    h1: Typography.H1,
    h2: Typography.H2,
    h3: Typography.H3,
    h4: Typography.H4,
    h5: Typography.H5,
    h6: Typography.H6,
    p: Typography.Paragraph,

    small: (p: any) => <Text as="small" {...p} />,
    strong: (p: any) => <Text as="strong" fontWeight="semibold" {...p} />,
    i: (p: any) => <Text as="i" {...p} />,

    blockquote: (p: BoxProps) => (
        <Box
            as="blockquote"
            position="relative"
            mx={[-4, 0]}
            pl={6}
            pr={8}
            py={2}
            my={8}
            fontSize="lg"
            sx={{
                "& p:last-child": {
                    mb: 0
                }
            }}
            fontStyle="italic"
            borderLeftWidth={4}
            borderLeftColor={useColorModeValue("gray.400", "gray.600")}
            rounded={["none", "sm"]}
            {...p}
        />
    ),
    author: ({children, ...p}: any) => (
        <Text
            as="div"
            fontFamily={theme.fonts.body}
            fontSize="xs"
            fontWeight="normal"
            fontStyle="normal"
            color="gray.500"
            mt={-2}
            _before={{
                content: "'-- '"
            }}
            {...p}
        >
            {children}
        </Text>
    ),

    a: (p: any) => {
        const isInternal =
            p.href.startsWith("#") ||
            (p.href.startsWith("/") && !p.href.startsWith("/images"))
        const color = useLinkColor()
        if (isInternal) {
            return <RouteLink to={p.href} color={color} sx={linkStyles} {...p} />
        }
        return <OutgoingLink color={color} sx={linkStyles} {...p} />
    },

    ul: (p: any) => <List styleType="disc" spacing={1} {...p} />,
    ol: (p: any) => <List as="ol" styleType="decimal" spacing={1} {...p} />,
    li: (p: any) => <ListItem ml={4} {...p} />,

    figure: (p: BoxProps) => <Box my={12} {...p} />,
    figcaption: (p: BoxProps) => (
        <Text
            fontSize="sm"
            textAlign="center"
            color={useColorModeValue("gray.600", "gray.400")}
            mt={2}
            {...p}
        />
    ),
    inlineCode: InlineCode,
    hr: (p: BoxProps) => (
        <Divider
            my={8}
            borderColor={useColorModeValue("gray.400", "gray.600")}
            w="100%"
            {...p}
        />
    ),
    kbd: Kbd,
    // Global scope:
    RouteLink,
    OutgoingLink: (p: any) => <OutgoingLink css={linkStyles} {...p} />,
    img: (p: any) => <Image mb={8} rounded="md" {...p} />,
}
