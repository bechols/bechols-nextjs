import { promises as fs } from "fs";
import path from "path";
import matter from "gray-matter";

export const getAllMDXInFolder = async (folderpath) => {
  const result = [];
  const dir = path.join(process.cwd(), folderpath);
  const blogPosts = await fs.readdir(dir);

  await Promise.all(
    blogPosts.map(async (post) => {
      const postPath = path.join(dir, post);
      const slug = post.replace(".mdx", "");

      const fileContent = await fs.readFile(postPath, "utf8");

      const {
        data: { title, source, sourcelink },
      } = matter(fileContent);

      result.push({
        title,
        source,
        sourcelink,
        slug,
      });
    })
  );

  return result;
};
