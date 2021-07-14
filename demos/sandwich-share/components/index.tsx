import * as Button from "./button";
import * as Card from "./card";
import * as CardGroup from "./card-group";
import * as Jumbotron from "./jumbotron";

const componentList: {
  [key: string]: { component: any; transform?: Function };
} = {
  "component-button": Button,
  "component-card-group": CardGroup,
  "component-card": Card,
  "component-jumbotron": Jumbotron,
};

const ComponentMapper = ({
  template,
  ...props
}: {
  template: string;
  [key: string]: any;
}) => {
  const { component: Component, transform } = componentList[template] || {};
  if (!Component) return <p>Component not found: {template}</p>;

  const compProps = transform ? transform(props) : { ...props };

  return <Component {...compProps} />;
};

export { ComponentMapper, componentList };
