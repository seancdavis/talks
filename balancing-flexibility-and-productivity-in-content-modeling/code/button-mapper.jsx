import Button from "../components/button";

const componentMap = { Button };

export default Page = (props) => {
  return (
    <div>
      {props.components.map((component) => {
        const TagName = componentMap[component._component];
        return <TagName {...component} />;
      })}
    </div>
  );
};
