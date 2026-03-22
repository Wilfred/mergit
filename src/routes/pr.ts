import { Router } from "express";

export const prRouter = Router();

prRouter.get("/:id", (req, res) => {
  res.render("pr", {
    title: `PR #${req.params.id} — Mergit`,
    pr: { id: req.params.id },
  });
});
