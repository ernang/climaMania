import { View, Text } from "react-native";

import { WeatherIcon } from "../WeatherIcon";

export function TodayWeather({ weather }) {
  if (!weather || !weather.weather || !weather.main) {
    console.log("Incomplete weather data");
    return null; // or some fallback UI
  }
  const weatherReceived = weather;

  return (
    <View>
      <Text className="text-gray-50 text-lg font-bold px-4 py-2">Today</Text>
      <View className="px-4 flex-row justify-between items-center">
        <WeatherIcon weather={weatherReceived.weather[0].description} />
        <View className="px-3 flex-2 flex-row gap-44">
          <Text className="text-base text-white">
            {weatherReceived.weather[0].main}
          </Text>
          <Text className="text-base text-white pl-2">
            {Math.round(weatherReceived.main.temp_max)}° -{" "}
            {Math.round(weatherReceived.main.temp_min)}°
          </Text>
        </View>
      </View>
    </View>
  );
}
