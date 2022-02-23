# ✨ test-storybook-msw

Here is a little POC exploring a few subjects:

- How to architecture an application.
- How to give visibility to the outside world (a product team for example) by using storybook.
- How to use storybook in a next app that requires a basePath.

## ⚡ Architecture

Our goal here is to know easily how we should test a component. Some are simple and may only need a few unit tests to get the team confident about their robustessness. On the other hand, others may be quite complex, embedding interactions with the outside world, or complex logic for example.

![Diagram](./docs/atomic-design.png)

We can use [atomic design](https://atomicdesign.bradfrost.com/chapter-2/) as a basis to classify our components. This approach has several advantages:

### 🔶 Common language used in tech team and in product team

It's easier to work together if a common language is used by both the product team and the dev team, instead of having a purely technical way to define components on one side, and a product driven definition on the other side.

### 🔶 Removing ambiguity about testing

How should I test my component? Which rules should I follow when testing it? Why should I even choose that testing strategy in place on another?

We can make it easier for every developer in our team to answer these questions right away by binding a testing strategy to each type of component. This clarifies what is expected for a component as well (code reviews ...).

### 🔶 Plan ahead

Classifying components will make it easier for us on the long run: we will be able to reason by scale and to use a divide & conquer approach when preparing a user story. This page contains two independent parts with complex rendering? Well, that means we will have two organisms then! That means we will write two integration tests!

## ⚡ Cool! But what does it means concretely?

Let's reflect on the classification we want to use. Here is a proposal:

- Since we are using an UI library (Mui), we can consider components coming from this library to be **Atoms**.
- **Molecules** could be simple components.
- **Organsms** may be bigger entities, embedding complex logic or having sophisticated rendering logic.
- We may want to create a 1-1 relationship between user stories and **Templates**. In that context, templates would be the root component of an entire page.
- Finally **Pages** would pretty much be nextjs pages...

![Diagram](./docs/frontend-architecture.png)

With this in mind, we can now think about a decision tree to identify the type of every component. We will also take advantage of this to define a few things:

- What should and shouldn't be on storybook.
- Which testing strategy should be used for each category.

![Diagram](./docs/components-categorization.png)

## ⚡ Testing strategy

Let's talk a bit about the various types of tests we can do and what problems they do solve.

### 🔶 Unit tests

They focus on testing a module - could be a component or a function - in isolation. That means any outside context this module may rely upon will be mocked. This are pretty straightforward tests, which are typically really fast.

### 🔶 Visual regression tests

These tests check that the small bricks of our app didn't drastically change visually. This is pretty useful when we defined our own system design relying on a whole set of generic components.

### 🔶 Snapshots

Snapshots are useful to make sure we didn't visually break another part of the application by touching a generic component for example.

### 🔶 Integration tests

Integration tests have the highest return on investment because they are not as hard to write and maintain as e2e tests while giving us good confidence about a part of our system.

### 🔶 End to end testing

The tests giving us the most confidence. They also cost a lot. So it's generally wiser to only write e2e for key features of our application; the ones that represent a critical risk for the product.

---

To summarize, what we aim to do is trophy testing, basing ourself on [Typescript](https://www.typescriptlang.org), [jest](https://jestjs.io), [testing library](https://testing-library.com), [msw](https://mswjs.io) and [cypress](https://www.cypress.io).

![Diagram](./docs/testing-trophy.jpg)

## ⚡ Storybook

Storybook gives us a great opportunity to demonstrate easily parts of our work on user stories instead of waiting for the completion of the entire user story.

## ⚡ The basepath issue

In our example here, our app is using a basepath. Let's see what it means for storybook:

### 🔶 Unifying next config

The first step is to unify next config, where basepath will be defined:

```javascript
// config/basePath.js

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '/front';

module.exports = {
  basePath,
};
```

### 🔶 next.config.js

Let's append the "Service-Worker-Allowed" header to each response, overriding the default worker's scope:

```javascript
module.exports = {
  basePath: '/front',
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Service-Worker-Allowed',
            value: '/',
          },
        ],
      },
    ];
  },
};
```

### 🔶 Storybook config

We will have to use a config for production and another for dev, because of the basepath. In dev mode, there won't be any basepath since we launch storybook in dev mode.

#### 🌀 dev config

```javascript
import { initialize } from 'msw-storybook-addon';

// Initialize MSW
initialize({ onUnhandledRequest: 'bypass' });
```

#### 🌀 prod config

```javascript
import { initialize } from 'msw-storybook-addon';
import { basePath } from '../../config/basePath';

// Initialize MSW
initialize({
  serviceWorker: {
    url: `${basePath}/mockServiceWorker.js`,
    options: {
      scope: '/',
    },
  },
});
```
