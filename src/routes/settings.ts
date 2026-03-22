import { Router } from "express";

export const settingsRouter = Router();

settingsRouter.get("/", (_req, res) => {
  res.render("settings", {
    title: "Settings — Mergit",
  });
});
