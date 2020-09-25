<div align="center">
  <h1>join-newlines</h1>
  <a href="https://npmjs.com/package/join-newlines">
    <img alt="npm" src="https://img.shields.io/npm/v/join-newlines.svg">
  </a>
  <a href="https://github.com/bconnorwhite/join-newlines">
    <img alt="typescript" src="https://img.shields.io/badge/TypeScript-%F0%9F%91%8D-blue.svg">
  </a>
  <a href="https://github.com/bconnorwhite/join-newlines">
    <img alt="GitHub stars" src="https://img.shields.io/github/stars/bconnorwhite/join-newlines?label=Stars%20Appreciated%21&style=social">
  </a>
  <a href="https://twitter.com/bconnorwhite">
    <img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/bconnorwhite.svg?label=%40bconnorwhite&style=social">
  </a>
</div>

<br />

> Join an array of strings with newlines.

## Installation

```bash
yarn add join-newlines
```

```bash
npm install join-newlines
```

## API

```ts
import join from "join-newlines";

join([
  "This is the first line."
  "Then I want this on a second line."
  "I also want this on a third line."
]);
// "This is the first line.\nThen I want this on a second line.\nI also want this on a third line."
```

## FAQ

### Why not just type `\n` in your string?
- Stacking each line in an array aligns nicely

### Why not just type `.join("\n")` after the array?
- Think this looks a little cleaner / more readable

<br />

<h2>Dev Dependencies<img align="right" alt="David" src="https://img.shields.io/david/dev/bconnorwhite/join-newlines.svg"></h2>

- [@bconnorwhite/bob](https://www.npmjs.com/package/@bconnorwhite/bob): Bob is a toolkit for TypeScript projects

<br />

<h2>License <img align="right" alt="license" src="https://img.shields.io/npm/l/join-newlines.svg"></h2>

[MIT](https://opensource.org/licenses/MIT)
