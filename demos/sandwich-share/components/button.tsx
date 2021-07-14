import Link from "next/link";

export interface Button {
  href: string;
  children: string;
}

const component = ({ href, children }: Button) => {
  return (
    <Link href={href}>
      <a className="inline-block py-3 px-6 bg-white rounded-md text-blue font-headings uppercase text-sm hover:bg-gray transition duration-300">
        {children}
      </a>
    </Link>
  );
};

const transform = (input: { [key: string]: any }): Button => {
  return {
    href: input.href || input.url,
    children: input.children || input.label,
  };
};

export { component, transform };
