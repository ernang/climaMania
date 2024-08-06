import React, { useState, useEffect } from "react";
import { Screen } from "../../components/Screen";
import { useRouter } from "expo-router";
import SearchIcon from "../../components/(svg)/Search";
import { View, Text, TextInput, ScrollView, Pressable } from "react-native";
import API_KEY from "../../lib/WeatherAPIKey";
import CancelIcon from "../../components/(svg)/Cancel";
import { PopularLocations } from "../../components/PopularLocations";
import { FlashList } from "@shopify/flash-list"; // Import FlashList

export default function SearchLocation() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const router = useRouter();

  const fetchCitySuggestions = async (query) => {
    if (query.length === 0) {
      setResults([]); // Clear the results if the query is empty
      return;
    }
    if (query.length < 3) return; // Avoid making API calls for short queries

    try {
      const response = await fetch(
        `https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=${API_KEY}`
      );
      const data = await response.json();

      // Filter out repeated cities based on name and country
      const uniqueCities = data.reduce((acc, city) => {
        const isCityRepeated = acc.some(
          (c) => c.name === city.name && c.country === city.country
        );
        if (!isCityRepeated) {
          acc.push(city);
        }
        return acc;
      }, []);
      setResults(uniqueCities);
    } catch (error) {
      console.error("Error fetching city suggestions:", error);
    }
  };

  const handleSelectCity = (city) => {
    const formattedCity = `${city.name}, ${city.country}`;
    setResults([]); // Clear the results
    setQuery("");
    router.push(`/city/${formattedCity}`);
  };

  useEffect(() => {
    return () => {
      // Reset the state when the component is unmounted
      setQuery("");
      setResults([]);
    };
  }, []);

  return (
    <Screen>
      <Text className="text-white text-2xl font-bold mb-6 mt-4">
        Search for a city
      </Text>
      <View className="flex-row justify-end items-center border border-white rounded-lg p-1 bg-white/40">
        <SearchIcon className="ml-2" />
        <TextInput
          className="pl-6 h-10 flex-1 text-base text-white"
          placeholder="Search for a city"
          placeholderTextColor={"lightgray"}
          value={query}
          onChangeText={(text) => {
            setQuery(text);
            fetchCitySuggestions(text);
          }}
        />
        <CancelIcon
          className="mr-2"
          onPress={() => {
            setQuery("");
            setResults([]); // Clear the results
          }}
        />
      </View>
      {query === "" ? (
        <>
          <Text className="text-white text-lg font-bold pb-1 pt-4">
            Popular Cities
          </Text>
          <ScrollView>
            <PopularLocations city="Beijing" countryCode="CN" />
            <PopularLocations city="Barcelona" countryCode="ES" />
            <PopularLocations city="Berlin" countryCode="DE" />
            <PopularLocations city="Tokyo" countryCode="JP" />
            <PopularLocations city="New York" countryCode="US" />
            <PopularLocations city="Sidney" countryCode="AU" />
          </ScrollView>
        </>
      ) : (
        <FlashList
          data={results}
          estimatedItemSize={50} // Important for performance optimization
          keyExtractor={(item) => `${item.lat}-${item.lon}`}
          renderItem={({ item }) => (
            <Pressable
              className="flex-row items-center p-2 pb-4 active:bg-gray-700/40"
              onPress={() => handleSelectCity(item)}
            >
              <Text className="text-white text-lg">
                {item.name}, {item.country}
              </Text>
            </Pressable>
          )}
        />
      )}
    </Screen>
  );
}
