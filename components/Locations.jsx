import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import SearchIcon from "./(svg)/Search";
import { ArrowRight } from "./Icons";
import { Link } from "expo-router";
import { getCities } from "../lib/Database";
import { useQuery, useRealm } from "@realm/react";
import { City } from "../lib/Task";

export function Locations() {
  const cities = useQuery(City);
  return (
    <View>
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
    </View>
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
