import { ActivityIndicator, View } from "react-native";
import { Image, Text } from "react-native";
import { getWeatherByCity } from "../lib/Api";
import { useEffect, useState } from "react";
import dayjs from "dayjs";

export function PopularLocations(city) {
  const cityName = city.city;
  const countryCode = city.countryCode;
  const images = {
    Beijing: require("../assets/Cities/Beijing.png"),
    Barcelona: require("../assets/Cities/Barcelona.png"),
    Berlin: require("../assets/Cities/Berlin.png"),
    Sidney: require("../assets/Cities/Sidney.png"),
    "New York": require("../assets/Cities/NewYork.png"),
    Tokyo: require("../assets/Cities/Tokyo.png"),
  };

  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state

  const formatTime = (timestamp, timezoneOffset) => {
    const date = new Date((timestamp + timezoneOffset) * 1000);
    const hours = date.getUTCHours().toString().padStart(2, "0");
    const minutes = date.getUTCMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  const fetchWeather = async () => {
    try {
      setLoading(true);
      const data = await getWeatherByCity(cityName, countryCode);
      if (data.cod === "404") {
        console.log("City not found");
        setWeather(null);
      } else {
        setWeather(data);
      }
    } catch (error) {
      console.error("Failed to fetch weather data:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchWeather();
  }, [city, countryCode]);
  return (
    <View className="flex-row justify-between p-1 mx-2 mt-3">
      {loading ? (
        <View className="flex-1 justify-center items-center">
          <ActivityIndicator size="large" color="#FFFFFF" />
          <Text className="text-white mt-10">Loading...</Text>
        </View>
      ) : (
        weather && (
          <>
            <View className="flex-1 py-2">
              <Text className="text-white capitalize font-light text-base mb-1">
                {weather.weather[0].description}
              </Text>
              <Text className="text-white font-bold text-base mb-1">
                {cityName} {Math.round(weather.main.temp)}º
              </Text>
              <Text className="text-white font-light text-base mb-1">
                {formatTime(weather.dt, weather.timezone)}
              </Text>
            </View>
            <Image source={images[cityName]} className="h-24 w-32 rounded-md" />
          </>
        )
      )}
    </View>
  );
}
