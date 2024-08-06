import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import SearchIcon from "./(svg)/Search";
import { ArrowRight } from "./Icons";
import { Link } from "expo-router";
import { Screen } from "./Screen";
import AddIcon from "./(svg)/AddIcon";
import { useQuery } from "@realm/react";
import { City } from "../lib/Task";

export function ViewAllLocations() {
  const cities = useQuery(City);
  return (
    <Screen>
      {cities.length > 0 ? (
        <>
          <Text className="text-white text-2xl font-bold mb-6 mt-4">
            Your Favourite Cities
          </Text>
          {cities.map((city) => (
            <View key={city._id} style={styles.container}>
              <View style={styles.leftContainer}>
                <Link href={`/city/${city.city},${city.countryCode}`} asChild>
                  <Pressable style={styles.rightContainer}>
                    <SearchIcon />
                  </Pressable>
                </Link>
                <Text style={styles.text}>
                  {city.city}, {city.countryCode}
                </Text>
                <Link href={`/city/${city.city},${city.countryCode}`} asChild>
                  <Pressable style={styles.rightContainer}>
                    <ArrowRight size={18} />
                  </Pressable>
                </Link>
              </View>
            </View>
          ))}
          <Link href="/searchLocation" className="m-3" asChild>
            <Pressable className="flex-row justify-center items-center rounded-md p-1 gap-1 bg-zinc-800 active:opacity-70 active:bg-zinc-700">
              <AddIcon size={18} />
              <Text className="text-white text-base">Add new location</Text>
            </Pressable>
          </Link>
        </>
      ) : (
        <View className="flex-1 items-center">
          <Image
            source={require("../assets/empty.webp")}
            className="w-80 h-80 rounded-2xl"
          />
          <Text className="text-white text-3xl font-bold mt-4">
            No locations saved yet
          </Text>
          <Text className="text-white text-md mt-2">
            Please add new locations to view them here
          </Text>
        </View>
      )}
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#000",
    paddingHorizontal: 16,
    minHeight: 56,
  },
  leftContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconBackground: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#333",
    borderRadius: 8,
    width: 40,
    height: 40,
  },
  text: {
    color: "#FFFFFF",
    fontSize: 16,
    flex: 1,
    marginLeft: 16,
  },
  rightContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 40,
    height: 40,
    backgroundColor: "#333",
    borderRadius: 8,
    padding: 4,
  },
});
