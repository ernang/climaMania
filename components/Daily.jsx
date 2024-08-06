import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Pressable,
  RefreshControl,
} from "react-native";
import { getCurrentWeather, getWeeklyWeather } from "../lib/Api";
import { HeaderWeather } from "./(weather_components)/Header";
import { TodayWeather } from "./(weather_components)/Today";
import { Locations } from "./Locations";
import { MapMarker } from "./Icons";
import { Screen } from "./Screen";
import { useRouter, Link } from "expo-router";
import { FiveDayForecast } from "./(weather_components)/FiveDayForecast";
import { AdditionalWeatherInfo } from "./AdditionalWeatherInfo";

export function Daily(loc) {
  const location = loc.loc;
  const router = useRouter();
  const [weather, setWeather] = useState(null);
  const [weeklyWeather, setWeeklyWeather] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [refreshing, setRefreshing] = useState(false); // Add refreshing state
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
    await fetchWeather(); // Fetch weather data
    console.log("Refreshed");
    setRefreshing(false); // Set refreshing state to false
  };

  useEffect(() => {
    if (location) {
      fetchWeather();
    }
  }, [location]); // The empty array means this effect runs once on mount

  return (
    <>
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
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "space-between",
    backgroundColor: "black",
  },
  sectionTitle: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  hourlyForecast: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },
  hourlyItem: {
    flexDirection: "column",
    alignItems: "center",
    paddingVertical: 8,
  },
  hourlyIcon: {
    marginBottom: 4,
  },
  hourlyLine: {
    width: 1.5,
    backgroundColor: "#434343",
    height: 8,
  },
  hourlyTime: {
    color: "#FFFFFF",
    fontSize: 16,
  },
  footer: {
    padding: 16,
    backgroundColor: "black",
  },
  addButton: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#333333",
    borderRadius: 8,
    paddingVertical: 8,
    alignItems: "center",
  },
  addButtonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    paddingLeft: 8,
  },
});
