build-lists: true

![original](../_assets/background/bg-shapes-logo.png)

# Balancing<br>_Flexibility_ & _Productivity_<br>in Content Modeling

### Sean C Davis

---

![](images/disney-intro.gif)

---

![original](images/inside-out-sad.gif)

[.header: #FFFFFF, alignment(left), DM Serif Display, text-scale(1.25)]

# It begins

## with a sad story.

---

![original](images/hercules-rage.gif)

[.header: #FFFFFF, DM Serif Display, text-scale(1.25)]

# [fit] _Everyone_

## [fit] hates their CMS.

---

![original](images/goofy-despair.gif)

[.header: #FFFFFF, DM Serif Display]

# [fit] And just when all seems lost ...

---

![original](images/mulan-hero.gif)

[.header: #FFFFFF, DM Serif Display, text-scale(1.25)]

# [fit] We find a way ...

^ I'm going to show you how to make people love it. (Or hate it less.)

---

![original](images/lion-king-love.gif)

[.header: #FFFFFF, DM Serif Display, text-scale(1.25)]

# [fit] ... to love our CMS again!

---

![original](images/disney-fireworks.gif)

[.header: #FFFFFF, DM Serif Display, text-scale(1.25)]

# [fit] THE END

---

![original](images/aristocats-pause.gif)

[.text-emphasis: DM Serif Display]
[.header: #FFFFFF, alignment(left), DM Serif Display, text-scale(1.5)]

### ~~Pause!~~

# Paws!

---

![original](../_assets/slides/scd-intro.png)

^ Three things about me ...

---

# [fit] C

---

Stella

---

I ❤️ sandwiches and stories

^ Let me tell you a story. (We'll talk about sandwiches a bit, too. But later.)

---

Content Management Systems

A brief history

---

Monolithic CMS

(The WordPress Era)

---

Headless CMS

(The Jamstack Way)

---

With great power comes ...

^ headless cms empowers developers, but with great power comes great responsibility

---

Money graphic?

^ Like being responsible for how your decisions affect cost

---

My theory: We can find a balanced approach that makes both developers and editors happy in this headless world.

---

Let's start with the content editors

---

Show page design

^ Setting up the example here. We want to provide a CMS experience for this design, and then we want to implement that content in our front end code.

---

How would you model the content for that page?

---

Ultimate flexibility

^ Maybe a graphic with the CMS experience. Or maybe just excalidraw.

---

Sandwich

^ Like a sandwich you make in your own kitchen. You can do whatever you want. But you have to decide and you have to do the work. Like peanut butter and mayonnaise, Grandma White.

---

Ultimate rigidity (productivity)

^ Maybe a graphic with the CMS experience. Or maybe just excalidraw.

---

Sandwich

^ Like a sandwich you buy in a deli. I have this local deli that has dozens of options, but it names every ingredient that will go on the sandwich ahead of time. Like a reuben. I say "Reuben" and I know what to expect.

---

Finding a balance

^ We know we want to find a balance in here, but how do we do that?

---

Let's talk about developers

^ The coolest people ever. Our rockstars. Overselling it?

---

Two best practices in building front ends:

---

First, Components

^ We build websites with components these days (server or client) to reduce duplicated code. Thinking of a website in terms of a global system makes it easier to add and edit over time.

---

Second, separating content from presentation

^ Separating content from presentation (no need to have a cms with _ultimate_ flexibility. that's what code is for)

---

Taking those practices to the CMS

^ How do those practices translate to the CMS?

---

Break up pages by components

---

(Look at the design, broken up by components)

---

Then, extract the content

---

Maybe this is just a JSON representation of the content we want to store as data.

---

How to model this behavior?

^ Modeling affects cost many times.

---

First, say you have a generic Page model ...

---

Three methods:

---

1. New model for each component with associations

screenshot with contentful, or maybe that's a new slide

---

2. Conditional fields

^ Which CMS does this well?

---

3. Modular content

Forestry

---

The Ultimately Flexible Page!

^ Once you have a pattern for components you have the ultimately flexible page (i.e. a Page model)

---

Show this in action -- title, meta, and components fields

---

Back to the front end

---

Graphic of the data flow.

^ Walk through the flow. It should include mappers and transformers

---

Zoom in and elaborate on mappers.

Code sample may help, too.

---

Zoom in and elaborate on transformers.

Code sample may help, too.

---

Using this approach, you can build the ultimately flexible page on the front-end.

---

Clean hands (our work is done, right?)

---

Still, that's not super productive for content editors. (Don't want to add a series of components for every blog post.)

---

Introducing Templates

^ Create new page type or model with repeatable patterns. Think: blog posts, generic content pages, etc.

---

Example of CMS fields for a rigid type, like a blog post

^ Templates streamline the flexible page by introducing _some_ amount of rigidity (i.e. productivity)

---

This translates to the front end

(Show code snippet)

---

Also gives you the ability to make it easier to add specific styling to some template (exceptions to global patterns).

---

Benefits ...

---

B #1: It enables you to scale down complexity to perfectly align with your editors' technical abilities

---

B #2: You already have a base engine in place on every project. All you have to do is define the components and decide where you want to introduce templates to help your editors, because templates in the code are still built on top of the flexible page.

---

Recap ...

---

Start with a flexible base that pulls data from the CMS, transforms it, then maps it to frontnd components.

---

Use templates to introduce specific rules and/or styles to help content editors

---

Consider cost of the CMS you're using when choosing how to implement components.

---

Sean C Davis

@seancdavis29

seancdavis.com

---

(It's sandwich time!)

---

Thank you!

---
