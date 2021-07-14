import FlexiblePage from "./flexible-page";
import HomePage from "./home-page";

const templateList: { [key: string]: any } = {
  default: FlexiblePage,
  home: HomePage,
};

const TemplateMapper = ({ template, ...props }: { template: string }) => {
  const Template = templateList[template];
  if (!Template) return <p>Template not found: {template}</p>;

  return <Template {...props} />;
};

export { TemplateMapper };
