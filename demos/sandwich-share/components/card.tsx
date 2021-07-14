import MarkdownIt from "markdown-it";

const md = new MarkdownIt();

export interface Card {
  body: string;
  color: string;
  heading: string;
  number: string | number;
  subtext: string;
}

const component = ({ body, color, heading, number, subtext }: Card) => {
  return (
    <div className="bg-gray rounded-md p-6">
      <div className="mb-6">
        <span
          className="rounded-full p-4 text-2xl font-headings leading-none flex items-center justify-center"
          style={{ backgroundColor: color, height: "58px", width: "58px" }}>
          {number}
        </span>
      </div>
      <h3 className="mb-3">{heading}</h3>
      <div
        dangerouslySetInnerHTML={{ __html: body }}
        className="text-lg mb-3"
      />
      <div dangerouslySetInnerHTML={{ __html: subtext }} className="text-xs" />
    </div>
  );
};

const transform = (input: { [key: string]: any }): Card => {
  return {
    body: md.render(input.body),
    color: input.color,
    heading: input.heading || input.title,
    number: input.number,
    subtext: md.render(input.subtext),
  };
};

export { component, transform };
