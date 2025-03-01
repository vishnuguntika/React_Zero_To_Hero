import React from "react";
import ReactDOM from "react-dom/client";


const HeaderComponent = () => {
  return (
    <div class="header">
      <div class="Food">Food Logo</div>
      <div class="Search">Search</div>
      <div class="user">User</div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />);
