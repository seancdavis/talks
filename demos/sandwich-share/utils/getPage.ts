import path from "path";
import fs from "fs";
import matter from "gray-matter";

export function getPage(pagePath: string) {
  const pageFilePath = path.join(process.cwd(), "content", `${pagePath}.md`);
  const pageContent = fs.readFileSync(pageFilePath);
  const { data } = matter(pageContent);

  return data;
}
