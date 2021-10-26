import React, {FC} from "react";

const Layout = ({children, frontMatter}: React.PropsWithChildren<{frontMatter: any}>) => {
    return (
        <div>
            <h1>{frontMatter.title}</h1>
            {children}
        </div>
    );
};

export default Layout;
