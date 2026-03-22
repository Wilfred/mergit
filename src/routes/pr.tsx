import { Router } from "express";
import React from "react";
import { PrDetail } from "../views/PrDetail";
import { renderPage } from "../views/render";

export const prRouter = Router();

prRouter.get("/:id", (req, res) => {
  renderPage(res, <PrDetail id={req.params.id} />);
});
