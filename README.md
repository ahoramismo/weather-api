# Weather API Wrapper Service

A lightweight Express.js-based wrapper service for accessing weather data using the [Visual Crossing Weather API](https://www.visualcrossing.com/weather-api).

> 📌 Part of the [roadmap.sh/projects/weather-api-wrapper-service](https://roadmap.sh/projects/weather-api-wrapper-service) initiative.

---

## 🚀 Getting Started

### 📦 Installation

```bash
npm install
```

### ▶️ Run the Server


```bash
# Start the server in production mode:
npm run start
```

```bash
# Start in development mode with watch:
npm run dev
```

## 🌤 API Usage
This wrapper fetches weather data using:
```bash
https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/{city}
```

### Example Request
```http
GET /api/weather/london
```
### Response Headers
* `X-Cache: HIT` — Response served from Redis cache

* `X-Cache: MISS` — Fresh response from upstream API