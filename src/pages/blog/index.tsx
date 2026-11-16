import { blogIndex } from "virtual:blog-index";

import { BlogArchive } from "@/components/blog-archive";

export default function BlogPage() {
  return <BlogArchive language="it" posts={blogIndex} />;
}
