import express from "express";
import path from "path";
import { dashboardRouter } from "./routes/dashboard";
import { prRouter } from "./routes/pr";
import { settingsRouter } from "./routes/settings";
import { historyRouter } from "./routes/history";

const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "..", "views"));

app.use(express.static(path.join(__dirname, "..", "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", dashboardRouter);
app.use("/pr", prRouter);
app.use("/settings", settingsRouter);
app.use("/history", historyRouter);

app.listen(port, () => {
  console.log(`Mergit is running on port ${port}`);
});

export default app;
