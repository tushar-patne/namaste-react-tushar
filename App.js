const heading = React.createElement(
  "h1",
  { id: "heading__" },
  "lets render the heading in the root element"
);

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "This is heading 1!!!!"),
    React.createElement("h2", {}, "This is heading 2!!!!"),
  ])
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent); 
// root.render(heading);