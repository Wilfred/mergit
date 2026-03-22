import { Router } from "express";

export const historyRouter = Router();

historyRouter.get("/", (_req, res) => {
  res.render("history", {
    title: "History — Mergit",
    merges: [],
  });
});
