import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { getCurrentWeather } from "../lib/Api"; // Ensure you have this function defined or imported
import { HeaderWeather } from "./(weather_components)/Header";
export function Weather() {
  const lat = "37.7749";
  const lon = "-122.4194";

  const [weather, setWeather] = useState(null);

  const fetchWeather = async () => {
    const data = await getCurrentWeather(lat, lon);
    setWeather(data);
  };

  useEffect(() => {
    fetchWeather();
  }, []); // The empty array means this effect runs once on mount

  return (
    <View className="flex-1 justify-center items-center">
      {weather && (
        <HeaderWeather weather={weather} />
      )}
    </View>
  );
}
