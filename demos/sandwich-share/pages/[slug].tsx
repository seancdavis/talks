import path from "path";
import glob from "fast-glob";

import { getPage } from "../utils/getPage";
import { TemplateMapper } from "../templates";

export default function Page(props: any) {
  return <TemplateMapper template={props.template} {...props} />;
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const page = getPage(slug);

  return { props: page };
}

export async function getStaticPaths() {
  const pagesDir = path.join(process.cwd(), "content");
  const pagePaths = glob.sync(path.join(pagesDir, "*.md"));
  const paths = pagePaths.map((pagePath) => {
    const slug = path.basename(pagePath, path.extname(pagePath));
    return { params: { slug } };
  });

  return { paths, fallback: false };
}
