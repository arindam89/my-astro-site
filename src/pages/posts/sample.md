---
layout: ../../layouts/Markdown.astro
---
# My Markdown Title

Once again the default is stretch, other than for items with an intrinsic `aspect ratio`. This means that by default, grid items will cover their grid area, unless you change that by setting alignment. The first item in the example demonstrates this default alignment:[^1]
[^1]: Here is the footnote.

## Table of Contents
* topic content 1 [Reference](http://dibya.org)
* Renders actual, "native" React DOM elements
* Allows you to escape or skip HTML (try toggling the checkboxes above)
* If you escape or skip the HTML, no `dangerouslySetInnerHTML` is used! Yay!


## Getting started
Preliminary question: 
<button onClick={()=> alert(42)}>What is the answer to the mystery of universe ??</button>

## HTML block below
<blockquote>
This blockquote will change based on the HTML settings above.
</blockquote>

## How about some code?

```js
var React = require('react');
var Markdown = require('react-markdown');
React.render(
  <Markdown source="# Your markdown here" />,
  document.getElementById('content')
);
```
Pretty neat, eh?

## Tables?
| Feature   | Support |
| --------- | ------- |
| tables    | ✔ |
| alignment | ✔ |
| wewt      | ✔ |

## More info?

Read usage information and more on [GitHub](//github.com/rexxars/react-markdown)
---------------
A component by [Espen Hovlandsdal](https://espen.codes/)