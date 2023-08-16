import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store.ts";
import App from "./App.tsx";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HelmetProvider>
      <Provider store={store}>
        <HashRouter basename="/">
          <App />
        </HashRouter>
      </Provider>
    </HelmetProvider>
  </React.StrictMode>,
);
