import Head from "next/head";

const BaseLayout = ({
  children,
  title,
}: {
  children: JSX.Element;
  title: string;
}) => {
  return (
    <div className="font-body text-black">
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="A (fake) non-profit dedicated to sharing sandwiches with those in need (of a sandwich)."
        />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🥪</text></svg>"
        />
      </Head>

      <div className="flex min-h-screen flex-col justify-between">
        <main className="mb-12">{children}</main>

        <footer className="bg-gray py-12 px-4">
          <div className="max-w-lg mx-auto text-center">
            <p className="mb-2">
              Made with 🥪 by{" "}
              <a
                href="https://twitter.com/seancdavis29"
                target="_blank"
                className="text-blue underline">
                Sean C Davis
              </a>
              .
            </p>
            <p className="text-sm">
              (
              <a
                href="https://github.com/seancdavis/talks/tree/main/demos/sandwich-share"
                target="_blank"
                className="text-blue underline">
                source code
              </a>
              )
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default BaseLayout;
