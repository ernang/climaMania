import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  North,
  NorthEast,
  East,
  SouthEast,
  South,
  SouthWest,
  West,
  NorthWest,
} from "./Icons";

export function AdditionalWeatherInfo({ weather }) {
  const { wind, main, sys } = weather;

  const getCompassDirection = (degree) => {
    let degreeInt = parseInt(degree, 10);
    const directions = [
      "North",
      "North-East",
      "East",
      "South-East",
      "South",
      "South-West",
      "West",
      "North-West",
    ];
    const index = Math.round(degreeInt / 45) % 8;
    return directions[index];
  };

  const formatTime = (timestamp, timezoneOffset) => {
    const date = new Date((timestamp + timezoneOffset) * 1000);
    const hours = date.getUTCHours().toString().padStart(2, "0");
    const minutes = date.getUTCMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  const getWindIcon = (degree) => {
    const directions = [
      "North",
      "North-East",
      "East",
      "South-East",
      "South",
      "South-West",
      "West",
      "North-West",
    ];
    const index = Math.round(degree / 45) % 8;
    const direction = directions[index];
    switch (direction) {
      case "North":
        return <South />;
      case "North-East":
        return <SouthWest />;
      case "East":
        return <West />;
      case "South-East":
        return <NorthWest />;
      case "South":
        return <North />;
      case "South-West":
        return <NorthEast />;
      case "West":
        return <East />;
      case "North-West":
        return <SouthEast />;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.leftColumn}>
        <View style={styles.box}>
          <Text style={styles.title}>Wind</Text>
          <View className="flex-row gap-4">
            <View>
              <Text style={styles.text}>{getCompassDirection(wind.deg)}</Text>
              <Text style={styles.text}>{wind.speed} m/s</Text>
            </View>
            {getWindIcon(wind.deg)}
          </View>
        </View>
        <View style={styles.box}>
          <Text style={styles.title}>Sunrise & Sunset</Text>
          <Text style={styles.text}>
            Sunrise: {formatTime(sys.sunrise, weather.timezone)}
          </Text>
          <Text style={styles.text}>
            Sunset: {formatTime(sys.sunset, weather.timezone)}
          </Text>
        </View>
      </View>
      <View style={styles.rightColumn}>
        <View style={styles.detailedBox}>
          <Text style={styles.title}>Detailed Info</Text>
          <View style={styles.details}>
            <View style={styles.detailRow}>
              <Text style={styles.label}>Humidity </Text>
              <Text style={styles.value}>{main.humidity}%</Text>
            </View>
            <View style={styles.detailRow}>
              <Text style={styles.label}>Feels like </Text>
              <Text style={styles.value}>{Math.round(main.feels_like)}º</Text>
            </View>
            <View style={styles.detailRow}>
              <Text style={styles.label}>Pressure </Text>
              <Text style={styles.value}>{main.pressure} mbar</Text>
            </View>
            <View style={styles.detailRow}>
              <Text style={styles.label}>Cloudiness </Text>
              <Text style={styles.value}>{weather.clouds.all}%</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  leftColumn: {
    flex: 1,
    justifyContent: "space-between",
  },
  rightColumn: {
    flex: 1,
  },
  box: {
    flex: 1,
    padding: 10,
    margin: 10,
    backgroundColor: "#262626",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  detailedBox: {
    flex: 2,
    padding: 10,
    margin: 10,
    backgroundColor: "#262626",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "white",
    fontWeight: "bold",
    marginBottom: 5,
  },
  text: {
    color: "white",
    fontSize: 14,
  },
  details: {
    alignItems: "flex-start",
    width: "100%",
  },
  detailRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    paddingVertical: 2,
  },
  label: {
    color: "#cccccc",
  },
  value: {
    color: "white",
    fontWeight: "bold",
  },
});
