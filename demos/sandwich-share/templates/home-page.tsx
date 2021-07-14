import { ComponentMapper } from "../components";
import BaseLayout from "./base-layout";

const HomePage = ({
  cta_label,
  cta_link,
  features,
  features_heading,
  heading,
  image,
  intro,
  title,
}: {
  cta_label: string;
  cta_link: string;
  features: Array<object>;
  features_heading: string;
  heading: string;
  image: string;
  intro: string;
  title: string;
}) => {
  return (
    <BaseLayout title={title}>
      <>
        <ComponentMapper
          template="component-jumbotron"
          heading={heading}
          body={intro}
          image={image}
          button={{ label: cta_label, url: cta_link }}
        />
        <ComponentMapper
          template="component-card-group"
          heading={features_heading}
          cards={features}
        />
      </>
    </BaseLayout>
  );
};

export default HomePage;
