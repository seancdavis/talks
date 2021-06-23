- Quick Intro
- Problem statement: Our front ends are built to serve the back-ends
- Elaborate
- Solution: Introducing a content layer as a way to abstract data to serve our front-ends
  - A middle layer to build a handshake between our backends (APIs) and our front ends
- Benefits:
  - Neither have to serve the other, but can do their own thing in their own way.
  - Build front ends consistently from project to project.
- How it works:
  - The content layer "engine" retrieves data from the
  - Need to support a new source? Add a driver to the engine and transform/normalize the data.
  - Nothing changes on the front end.
- Two approaches
  1. Normalized engine that writes data to file (markdown, JSON), and the front end consumes those data objects.
     - Better for content that can be static or only partially real-time, or specific to builds. (think: prerendered website)
  2. A hosted solution that pulls in content on the fly. (GraphQL is a good fit here)
- Wrap it up
