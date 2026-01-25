import { render } from "preact";
import App from "./App";

import "./main.css";

const container = document.getElementById("app");
if (container) {
  render(<App />, container);
}
