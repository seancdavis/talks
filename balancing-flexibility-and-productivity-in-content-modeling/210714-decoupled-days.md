Outline:

(Play through with a sandwich analogy)

- Everyone hates their CMS
- I'm going to show you how to make people love it. (Or hate it less.)
- About me
- CMS went through a transition -- give the history
- Headless CMS leaves so much up to us to decide
- And those decisions can also affect cost
- We can find a balanced approach that makes both developers and editors happy

Talk first about the content editors

- Show home page example design
- Ultimate flexibility vs ultimate rigidity/productivity
- We know we want to find a balance in here, but how do we do that?

Then move on to the developers

- We build websites with components these days (server or client)
- Separating content from presentation (no need to have a cms with _utlimate_ flexibility)

In the CMS ...

- Break up pages by components (do this with the design first)
- First, build the ultimately flexible, component-based page
- How to do this with ... Contentful, Forestry or Stackbit
  - Or maybe a better approach here is to outline some specific examples - creative ways to implement this without breaking the bank. (conditional fields, model for each component, modular content)
  - Also consider nesting?
- Some commentary on how these decisions can affect cost
- Find similar pages and create "templates" to define groups of pages (models, content types, etc.)
- Templates streamline the flexible page by introducing _some_ amount of rigidity (i.e. productivity)

Back to the front end

- The front end mirrors this behavior by building itself upon the ultimately-flexible page
- Introduction to mappers and transformers
- Introduce templates that build rules and styles around repeatable patterns in your site

- Benefits:
  - It enables you to scale down complexity to perfectly align with your editors' technical abilities
  - You already have a base engine in place on every project. All you have to do is define the components and decide where you want to introduce templates to help your editors, because templates in the code are still built on top of the flexible page.

Recap:

- Start with a flexible base that pulls data from the CMS, transforms it, then maps it to front-end components.
- Use templates to introduce specific rules and/or styles to help content editors
- Consider cost of the CMS you're using when choosing how to implement components.
- About me
- It's sandwich time!
