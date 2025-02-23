import React from "react";
import ReactDOM from "react-dom/client";


const Title = () => (
  <h1 id="title" key="h2">
    Namaste React Guru
  </h1>
);

// component composition.
const HeaderComponent = () => {
  return (
    <div>
      <Title/>
      <h2>Namaste React Functional Component</h2>
      <h2>This is a h2</h2>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />);
