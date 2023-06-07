// MDN Documentation on promises and async/await is very good
//
// Promises:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
//
// Async/Await
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function

/**
 * Fetch operation as a promise chain
 *
 * This is a lower-level, more verbose way of dealing with asynchronicity.
 * Each call to .then returns a new promise, which resolves to the
 * value returned by its callback function. Since .then itself returns
 * a promise, we can continue calling chains of .then methods with each
 * resolved value
 * */

fetch(url) // fetch returns a promise which resolves to a response object
  .then((response) => response.json()) // .then calls the provided callback, returning a promise for its result
  .then((data) => {
    // do something with data
  });

/**
 * Fetch operation using async / await
 *
 * Declaring a function as async (preceding the `function` keyword with `async`)
 * allows us to use the `await` keyword. Await "unwraps" the returned promise and
 * assigns the resolved value to the variable. Therefore, the variable `response`
 * in the example below doesn't contain a promise for the response, but instead
 * contains the response itself.
 *
 * By eliminating the chains of .then() methods, we get much less verbose code, and
 * it's much more straightforward to refer to variables since they're no longer isolated
 * in the scope of their respective callback functions.
 *
 * It's worth noting that if you return a value from an async function, the function
 * returns a promise for that value, not the value itself
 * */

async function fetchUrl(url) {
  const response = await fetch(url);
  const data = await response.json();
  // do something with our data
  return data;
}

// Awaiting promises inside event handlers is as simple as declaring the handler
// to be async. Because fetchUrl is declared as async above, we have to await
// the returned data. In order to use await within the event handler function,
// declare that function as async...here👇
someElement.addEventListener('click', async () => {
  const pointData = await fetchUrl(pointUrl);
  const forecast = await fetchUrl(pointData.properties.forecast);
});
