import { Router } from "express";
import React from "react";
import { Settings } from "../views/Settings";
import { renderPage } from "../views/render";

export const settingsRouter = Router();

settingsRouter.get("/", (_req, res) => {
  renderPage(res, <Settings />);
});
