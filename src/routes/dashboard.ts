import { Router } from "express";

export const dashboardRouter = Router();

dashboardRouter.get("/", (_req, res) => {
  res.render("dashboard", {
    title: "Dashboard — Mergit",
    queue: [],
  });
});
