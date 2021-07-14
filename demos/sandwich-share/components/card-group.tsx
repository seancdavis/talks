import { ComponentMapper } from ".";

export interface CardGroup {
  cards: Array<object>;
  heading: string;
}

const component = ({ cards, heading }: CardGroup) => {
  return (
    <div className="py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-center mb-8">{heading}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <ComponentMapper key={idx} template="component-card" {...card} />
          ))}
        </div>
      </div>
    </div>
  );
};

const transform = (input: { [key: string]: any }): CardGroup => {
  return {
    cards: input.cards,
    heading: input.heading || input.title,
  };
};

export { component, transform };
