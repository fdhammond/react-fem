import React from "react";
import { createRoot } from "react-dom/client";
import Pet from "./Pet";

const App = () => {
  <div>
    <h1>Adopt me!</h1>
    <Pet name="Max" animal="cat" breed="Shorthair" />
    <Pet name="Luna" animal="dog" breed="Husky" />
    <Pet name="Charlie" animal="bird" breed="Tabby" />
  </div>;
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
