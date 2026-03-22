import { Router } from "express";
import React from "react";
import { History } from "../views/History";
import { renderPage } from "../views/render";

export const historyRouter = Router();

historyRouter.get("/", (_req, res) => {
  renderPage(res, <History merges={[]} />);
});
