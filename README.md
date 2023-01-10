<!--BEGIN HEADER-->
<div id="top" align="center">
  <h1>join-newlines</h1>
  <a href="https://npmjs.com/package/join-newlines">
    <img alt="NPM" src="https://img.shields.io/npm/v/join-newlines.svg">
  </a>
  <a href="https://github.com/bconnorwhite/join-newlines">
    <img alt="TypeScript" src="https://img.shields.io/github/languages/top/bconnorwhite/join-newlines.svg">
  </a>
</div>

<br />

<blockquote align="center">Join an array of strings with newlines.</blockquote>

<br />

_If I should maintain this repo, please ⭐️_
<a href="https://github.com/bconnorwhite/join-newlines">
  <img align="right" alt="GitHub stars" src="https://img.shields.io/github/stars/bconnorwhite/join-newlines?label=%E2%AD%90%EF%B8%8F&style=social">
</a>

_DM me on [Twitter](https://twitter.com/bconnorwhite) if you have questions or suggestions._
<a href="https://twitter.com/bconnorwhite">
  <img align="right" alt="Twitter" src="https://img.shields.io/twitter/url?label=%40bconnorwhite&style=social&url=https%3A%2F%2Ftwitter.com%2Fbconnorwhite">
</a>

---
<!--END HEADER-->

## Installation

```sh
yarn add join-newlines
```

```sh
npm install join-newlines
```

```sh
pnpm add join-newlines
```

## API

The provided array of strings is joined with newlines. Any `undefined` values are filterd out.

Additionally, you can pass `true` as a second argument to append a newline to the end of the string.

```ts
import join from "join-newlines";

join([
  "This is the first line.",
  "Then I want this on a second line.",
  "I also want this on a third line."
]);
// "This is the first line.\nThen I want this on a second line.\nI also want this on a third line."

join([
  "This is the first line.",
  "Then I want this on a second line.",
  undefined,
  "I also want this on a third line."
]);
// "This is the first line.\nThen I want this on a second line.\nI also want this on a third line."

join([
  "This is the first line.",
  "Then I want this on a second line.",
  "I also want a newline at the end."
], true); // Add true to append a newline to the end as well.
// "This is the first line.\nThen I want this on a second line.\nI also want a newline at the end.\n"
```

## FAQ

### Why not just type `\n` in your string?
- Stacking each line in an array aligns nicely, which fixes issues with indentation, especially when using template strings.

### Why not just type `.join("\n")` after the array?
- Think this looks a little cleaner / more readable, and filters out `undefined` values.

<!--BEGIN FOOTER-->

<br />

<h2>Dev Dependencies</h2>

- [autorepo](https://www.npmjs.com/package/autorepo): Autorepo abstracts away your dev dependencies, providing a single command to run all of your scripts.


<br />

<h2 id="license">License <a href="https://opensource.org/licenses/MIT"><img align="right" alt="license" src="https://img.shields.io/npm/l/join-newlines.svg"></a></h2>

[MIT](https://opensource.org/licenses/MIT)
<!--END FOOTER-->
