import React, { useEffect, useState } from "react";
import { Text, ScrollView, StyleSheet, RefreshControl } from "react-native";
import { getCurrentWeather, getWeeklyWeather } from "../lib/Api";
import { HeaderWeather } from "./(weather_components)/Header";
import { TodayWeather } from "./(weather_components)/Today";
import { Screen } from "./Screen";
import { FiveDayForecast } from "./(weather_components)/FiveDayForecast";
import { AdditionalWeatherInfo } from "./AdditionalWeatherInfo";

export function Daily(loc) {
  const location = loc.loc;
  const [weather, setWeather] = useState(null);
  const [weeklyWeather, setWeeklyWeather] = useState(null);
  const [refreshing, setRefreshing] = useState(false);

  const fetchWeather = async () => {
    if (!location) {
      return;
    }
    const lat = location.coords.latitude;
    const lon = location.coords.longitude;
    const data = await getCurrentWeather(lat, lon);
    const weeklyData = await getWeeklyWeather(lat, lon);
    setWeather(data);
    setWeeklyWeather(weeklyData);
  };

  const onRefresh = async () => {
    setRefreshing(true); // Set refreshing state to true
    if (location) {
      fetchWeather();
    } // Fetch weather data
    setRefreshing(false); // Set refreshing state to false
  };

  useEffect(() => {
    if (location) {
      fetchWeather();
    }
  }, [location]); // The empty array means this effect runs once on mount

  return (
    <Screen>
      {weather && (
        <>
          <ScrollView
            refreshControl={
              // Add refresh control to ScrollView
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
          >
            <HeaderWeather weather={weather} />
            <TodayWeather weather={weather} />
            <Text className="text-lg text-gray-50 font-bold px-4 pt-2">
              Forecast
            </Text>
            <FiveDayForecast weeklyWeather={weeklyWeather} />
            <AdditionalWeatherInfo weather={weather} />
          </ScrollView>
        </>
      )}
    </Screen>
  );
}
