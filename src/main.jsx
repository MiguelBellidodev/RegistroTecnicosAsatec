import { createRoot } from "react-dom/client"; //el import cuando el export no es por defecto
import "./index.css"; //es un import global para que se tome en cuenta en toda la app
import App from "./App.jsx"; // el import cuando el export es por defecto

const $app = document.getElementById("app");
const entry = createRoot($app);
entry.render(<App />);
