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

---

Everyone hates their CMS

---

Maybe it's not the CMS's fault.

Theory: Clients who love their CMS experience either 1) don't use it, or 2) haven't used it.

Problem: The perfect CMS experience differs widely from user to user. Folks with no technical background aren't going to use a markdown CMS, while that's perfectly fine for many of us. I consider GitHub to be a great CMS.

And in-context editing is reallly difficult to achieve and maintain. And it doesn't solve for every scenario.

Shout out: Stackbit and Tina.

So we end up in this place in which it becomes extremely difficult to be productive because to cater the CMS experience to the primary users means building something custom every friggin' time.

Theory: By building a front end that accounts for maximum flexibility, we can build a CMS experience that is customized to our editors, while being consistent for our developers.

Problems with headless world:

- Cost modeling makes it difficult to pin down what you're going to spend
- Your approach has a direct impact on billing.

Let' talk about how we can build an experience that puts you in control and gives you the power to weigh your options and make the right decision.

The difference between structured and flexible content.

structured in blog posts. fields map to specific areas on the page.

flexible has an open field and you can write any HTML in there.

Maybe we want to be in the middle somewhere.

The typical marketing website.

- HOme page
- Basic content pages (about, etc.)
- Contact page
- Blog posts

## How do we normally build this sort of thing?

Explaining the technical theory on the front end.

- templates
- components

components

- transformers
- mappers

Build the most flexible page as your base. This thing exists in every project.

Expose that in the CMS _if necessary_.

Then, get more structured.

Examples on how this looks in practice.

https://www.ample.co/blog/the-perfectly-flexible-page-building-experience
https://css-tricks.com/reconciling-editor-experience-and-developer-experience-in-the-cms/
