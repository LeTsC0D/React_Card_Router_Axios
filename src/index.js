import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Profile from "./Profile";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Profile />
  </StrictMode>
);
