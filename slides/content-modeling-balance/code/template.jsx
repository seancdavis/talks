import CardGroup from "../components/card-group";
import Jumbotron from "../components/jumbotron";

export default LandingPage = (props) => {
  return (
    <div>
      <Jumbotron
        heading={props.heading}
        body={props.intro}
        button={{
          label: props.cta_label,
          url: props.cta_link
        }}
      />
      <CardGroup
        heading={props.features_heading}
        cards={props.features}
      />
    </div>
  );
};
