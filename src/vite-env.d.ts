/// <reference types="vite/client" />

declare module "virtual:blog-index" {
  export const blogIndex: import("./types/blog").BlogSummary[];
}
declare module "virtual:home-posts" {
  export const latestPosts: import("./types/blog").BlogSummary[];
}

declare module "virtual:blog-loaders" {
  export const blogLoaders: Record<
    string,
    () => Promise<{ post: import("./data/blogPosts").BlogPost }>
  >;
}
