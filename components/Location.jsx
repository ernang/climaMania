import React, { useEffect, useState } from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Pressable,
  Image,
} from "react-native";
import { getWeatherByCity, getWeeklyCity } from "../lib/Api";
import { HeaderWeather } from "./(weather_components)/Header";
import { TodayWeather } from "./(weather_components)/Today";
import { Screen } from "./Screen";
import AddIcon from "./(svg)/AddIcon";
import SearchIcon from "./(svg)/Search";
import { Link, useRouter } from "expo-router";
import { getLocations, insertCity, deleteCity } from "../lib/Database";
import { FiveDayForecast } from "./(weather_components)/FiveDayForecast";
import { useRealm } from "@realm/react";
import { AdditionalWeatherInfo } from "./AdditionalWeatherInfo";

export default function Location(location) {
  const realm = useRealm();
  const router = useRouter();
  const loc = location.location;
  const [city, countryCode] = loc.split(",");

  const [weather, setWeather] = useState(null);
  const [weeklyWeather, setWeeklyWeather] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state

  const [locationExists, setLocationExists] = useState(false);

  const fetchWeather = async () => {
    try {
      setLoading(true);
      const data = await getWeatherByCity(city, countryCode);
      const weeklyData = await getWeeklyCity(city, countryCode);
      if (data.cod === "404") {
        console.log("City not found");
        setWeather(null);
        setWeeklyWeather(null);
      } else {
        setWeather(data);
        setWeeklyWeather(weeklyData);
      }
    } catch (error) {
      console.error("Failed to fetch weather data:", error);
    } finally {
      setLoading(false);
    }
  };
  const addLocation = async () => {
    try {
      await insertCity(realm, city, countryCode);
      router.back();
    } catch (error) {
      console.error("Failed to add location:", error);
    }
  };

  const deleteLocation = async () => {
    try {
      await deleteCity(realm, city, countryCode);
      router.back();
    } catch (error) {
      console.error("Failed to delete location:", error);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, [city, countryCode]);

  useEffect(() => {
    const fetchLocations = async () => {
      const existingCity = realm
        .objects("City")
        .filtered("city == $0 && countryCode == $1", city, countryCode);
      console.log(existingCity);
      if (existingCity.length > 0) {
        setLocationExists(true);
      } else {
        console.log("Location does not exist in the database.");
        setLocationExists(false);
      }
    };

    fetchLocations();
  }, [city, countryCode]);

  return (
    <Screen>
      <ScrollView contentContainerStyle={styles.container}>
        {loading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#FFFFFF" />
            <Text style={styles.loadingText}>Loading...</Text>
          </View>
        ) : weather ? (
          <View>
            <HeaderWeather weather={weather} />
            <TodayWeather weather={weather} />
            <Text className="text-lg text-gray-50 font-bold px-4 pt-2">
              Forecast
            </Text>
            <FiveDayForecast weeklyWeather={weeklyWeather} />
            <AdditionalWeatherInfo weather={weather} />
            {!locationExists ? (
              <View style={styles.footer}>
                <Pressable
                  className="flex-row justify-center rounded-md py-2 items-center bg-zinc-800 active:opacity-70 active:bg-zinc-700"
                  onPress={() => {
                    addLocation();
                  }}
                >
                  <AddIcon size={18} />
                  <Text style={styles.addButtonText}>Add new location</Text>
                </Pressable>
              </View>
            ) : (
              <View style={styles.footer}>
                <Pressable
                  className="flex-row justify-center rounded-md py-2 items-center bg-red-800 active:opacity-70 active:bg-red-700"
                  onPress={() => {
                    // Handle deleting a location
                    deleteLocation();
                  }}
                >
                  <AddIcon size={18} />
                  <Text style={styles.addButtonText}>Delete location</Text>
                </Pressable>
              </View>
            )}
          </View>
        ) : (
          <View>
            <View className="flex-1 items-center">
              <Image
                source={require("../assets/not-found.webp")}
                className="w-80 h-80 rounded-2xl"
              />
              <Text className="text-white text-3xl font-bold mt-4">
                Location Not Found
              </Text>
              <Text className="text-white text-md mt-2">
                Please check your spelling or try another location
              </Text>
            </View>
            <Link href={"/searchLocation"} asChild>
              <Pressable className="m-5 flex-1 flex-row justify-center rounded-md py-2 items-center bg-zinc-800 active:opacity-70 active:bg-zinc-700">
                <SearchIcon />
                <Text style={styles.addButtonText}>Try again</Text>
              </Pressable>
            </Link>
          </View>
        )}
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "space-between",
    backgroundColor: "black",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    color: "#FFFFFF",
    marginTop: 10,
  },
  sectionTitle: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
    paddingHorizontal: 16,
    paddingVertical: 8,
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
