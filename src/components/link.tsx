import NextLink from 'next/link';
import {UrlObject} from "url";
import {Icon, Link as ChakraLink, LinkProps as ChakraLinkProps} from "@chakra-ui/react";

type Url = string | UrlObject;

interface RouteLinkProps extends Omit<ChakraLinkProps, "as"> {
    as?: Url;
    to: string;
}

interface OutgoingLinkProps extends ChakraLinkProps{
    isExternal?: boolean;
    showExternalIcon?: boolean
}

export const RouteLink: React.FC<RouteLinkProps> = ({to, as = to, children, ...props}) => {
    return (
        <NextLink href={to} passHref as={as}>
            <ChakraLink {...props}>{children}</ChakraLink>
        </NextLink>
    );
};

export const OutgoingLink: React.FC<OutgoingLinkProps> = ({children, isExternal = true, showExternalIcon = false, ...props}) => {
    return (
        <ChakraLink isExternal={isExternal} {...props}>
            {children}
            {showExternalIcon && (<Icon name="external-link" mx="2px" aria-label="(external link)" mt="-0.25em" fontSize="0.8em" />)}
        </ChakraLink>
    );
};
