import { Router } from "express";
import React from "react";
import { Dashboard } from "../views/Dashboard";
import { renderPage } from "../views/render";

export const dashboardRouter = Router();

dashboardRouter.get("/", (_req, res) => {
  renderPage(res, <Dashboard queue={[]} />);
});
