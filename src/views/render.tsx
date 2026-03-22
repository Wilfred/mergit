import { renderToStaticMarkup } from "react-dom/server";
import type { Response } from "express";
import type { ReactElement } from "react";

export function renderPage(res: Response, element: ReactElement) {
  const html = "<!DOCTYPE html>" + renderToStaticMarkup(element);
  res.type("html").send(html);
}
