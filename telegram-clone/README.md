# Telegram clone

Complete Project[here]()

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## difference between arrow and normal function

- arrow functions are only callable
  Regular functions are constructible and callable.
  they can be called using the new keyword.
  However, the arrow functions are only callable and not constructible.
  Hence, they can never be invoked with the new keyword.

- arrowed function is more `use stricted` ( added in es6 )

  - function add(x, x){} is valid while (x, x) => {} is not
    Arrow functions can never have duplicate named parameters,
    whether in strict or non-strict mode.

  - arrow functions are not hoisted when regular functions do

- unlike Regular functions, arrow function does not have their own "this" keyword.

## objects in DOM can't be rendered directly ...

for example `{new Date(messages[0]?.data.timestamp?.toDate()).toUTCString()}`
the Date object can't be rendered in DOM so we use toUTCstring
because string type can be rendered in DOM(HTML)
