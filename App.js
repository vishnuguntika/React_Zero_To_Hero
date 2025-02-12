const heading = React.createElement(
  "h1",
  {
    id: "title",
  },

  "Namaste Everyone!"
);

const heading1 = React.createElement(
  "h1",
  {
    id: "title",
  },
  "heading 1"
);

const heading2 = React.createElement(
  "h2",
  {
    id: "title",
  },
  "heading 2"
);

const container = React.createElement(
  "div",
  {
    id: "container",
  },

  [heading, heading1, heading2]
);

console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

//passing a react element inside the root
// render - it takes the react element, and modifies the react dom
// root.render(heading);

// Learn about async and defer
root.render(container);
