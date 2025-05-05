import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import {redisClient} from "./configs/redis";
import weatherRoutes from "./routes/weather";

await redisClient.connect();

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.render("index", { title: "Weather App" });
});

app.use("/api/weather", weatherRoutes)

app.listen(PORT, () => {
  console.log(`✅ Server is running at http://localhost:${PORT}`);
});
