import { ComponentMapper } from "../components";
import BaseLayout from "./base-layout";

const FlexiblePage = ({
  components,
  title,
}: {
  components: Array<{ template: string; props?: object }>;
  title: string;
}) => {
  return (
    <BaseLayout title={title}>
      <>
        {components.map((component, idx) => (
          <ComponentMapper key={idx} {...component} />
        ))}
      </>
    </BaseLayout>
  );
};

export default FlexiblePage;
