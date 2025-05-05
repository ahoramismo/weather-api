export const fetchWeather = async (city: string) => {
  const apiKey = process.env.WEATHER_APP_API_KEY;
  if (!apiKey) throw new Error("Missing WEATHER_APP_API_KEY");

  const apiUrl = new URL(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}`);

  apiUrl.searchParams.append("key", apiKey);
  apiUrl.searchParams.append("unitGroup", "us");
  apiUrl.searchParams.append("contentType", "json");

  const response = await fetch(apiUrl.toString());
  if (!response.ok) {
    throw new Error("Failed to fetch weather data");
  }

  return await response.json();
};
