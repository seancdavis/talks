import Image from "next/image";
import MarkdownIt from "markdown-it";
import { ComponentMapper } from ".";

const md = new MarkdownIt();

export interface Jumbotron {
  heading: string;
  body: string;
  image: string;
  button: object;
}

const component = ({ heading, body, button, image }: Jumbotron) => {
  return (
    <div className="bg-blue text-white py-16 px-8">
      <div className="md:flex md:content-evenly max-w-4xl mx-auto">
        <div className="md:mr-12 text-center md:text-left">
          <h1>{heading}</h1>
          <div
            className="text-lg mb-6"
            dangerouslySetInnerHTML={{ __html: body }}
          />
          <ComponentMapper template="component-button" {...button} />
        </div>
        <div className="max-w-xs hidden md:block">
          <Image src={image} width={800} height={504} />
        </div>
      </div>
    </div>
  );
};

const transform = (input: { [key: string]: any }): Jumbotron => {
  return {
    body: md.render(input.body),
    button: input.button,
    heading: input.heading || input.title,
    image: input.image,
  };
};

export { component, transform };
