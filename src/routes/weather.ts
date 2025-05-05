import { Router } from "express";
import { fetchWeather } from "../services/fetchWeather";
import { redisClient } from "../configs/redis";

const router = Router();

router.get("/:city", async (req, res) => {
  const { city } = req.params;
  const cacheKey = `weather:${city.toLowerCase()}`;

  try {
    const cachedData = await redisClient.get(cacheKey);

    if (cachedData && typeof cachedData === "string") {
      res.setHeader("X-Cache", "HIT");
      res.json(JSON.parse(cachedData));
      return;
    }

    const data = await fetchWeather(city);
    await redisClient.setEx(cacheKey, 1800, JSON.stringify(data));

    res.setHeader("X-Cache", "MISS");
    res.json(data);
  } catch (error) {
    console.error("❌ Error in weather route:", error);
    res.status(500).json({ error: "Failed to fetch weather data" });
  }
});

export default router;
