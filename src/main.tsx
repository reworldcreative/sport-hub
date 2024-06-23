import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import "./styles/index.scss";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { Provider } from "react-redux";
import store from "./store/store";

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const domNode = document.getElementById("root");
const root = createRoot(domNode!);

root.render(
  <HashRouter>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </HashRouter>
);
