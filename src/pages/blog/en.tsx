import { blogIndex } from "virtual:english-blog-index";

import { BlogArchive } from "@/components/blog-archive";

export default function EnglishBlogPage() {
  return <BlogArchive language="en" posts={blogIndex} />;
}
