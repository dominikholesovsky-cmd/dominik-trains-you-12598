import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { AppProviders, AppRoutes } from "./App";

/** Vykreslí úvodní stránku do HTML při sestavení webu (kvůli vyhledávačům). */
export const render = (url = "/") =>
  renderToString(
    <AppProviders>
      <StaticRouter location={url}>
        <AppRoutes />
      </StaticRouter>
    </AppProviders>,
  );
