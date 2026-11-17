import { alternatePageCounts, blogIndex } from "virtual:blog-index";

import { BlogArchive } from "@/components/blog-archive";

export default function BlogPage() {
  return (
    <BlogArchive
      alternatePageCounts={alternatePageCounts}
      language="it"
      posts={blogIndex}
    />
  );
}
