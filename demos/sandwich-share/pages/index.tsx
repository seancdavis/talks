import { getPage } from "../utils/getPage";
import { TemplateMapper } from "../templates";

export default function Page(props: any) {
  return <TemplateMapper template={props.template} {...props} />;
}

export async function getStaticProps() {
  const page = await getPage("index");

  return { props: page };
}
