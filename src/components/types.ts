export interface Post {
    path: string;
    title: string;
}
export interface Frontmatter {
    layout?: string;
    path: string;
    title: string;
    description: string;
    publishTime: string;
    keywords: string[];
    allPosts: Post[];
}
