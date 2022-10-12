/**
 * @desc
 * A stateful UI that's incredibly simple at the lowest level
 * This is how it works.
 *
 * @returns {{render, increment, decrement, initEvents}}
 */
const App = (function () {
  const state = {
    counter: 0,
  };

  function decrement() {
    state.counter -= 1;
    App.render().initEvents();
  }

  function increment() {
    state.counter += 1;
    App.render().initEvents();
  }

  function component() {
    return `
      <div>Counter ${state.counter}</div>
      <button class="increment">Increment(+)</button>
      <button class="decrement">Decrement(-)</button>
    `;
  }

  function render() {
    app.innerHTML = component();
    return App;
  }

  function initEvents() {
    let inc = document
      .querySelector(".increment")
      .addEventListener("click", App.increment);

    let dec = document
      .querySelector(".decrement")
      .addEventListener("click", App.decrement);
  }

  return { render, increment, decrement, initEvents };
})();

App.render().initEvents();

/*
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>

<div id="app"></div>

<script>
  const App = (function () {
    const state = {
      counter: 0,
    };

    function decrement() {
      state.counter -= 1;
      App.render().initEvents();
    }

    function increment() {
      state.counter += 1;
      App.render().initEvents();
    }

    function component() {
      return `
      <div>Counter ${state.counter}</div>
      <button class="increment">Increment(+)</button>
      <button class="decrement">Decrement(-)</button>
    `;
    }

    function render() {
      app.innerHTML = component();
      return App;
    }

    function initEvents() {
      let inc = document
          .querySelector(".increment")
          .addEventListener("click", App.increment);

      let dec = document
          .querySelector(".decrement")
          .addEventListener("click", App.decrement);
    }

    return { render, increment, decrement, initEvents };
  })();

  App.render().initEvents();
</script>
</body>
</html>
 */
