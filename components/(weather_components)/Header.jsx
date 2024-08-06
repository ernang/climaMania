import { View, Text } from "react-native";
import { StyleSheet } from "react-native";

export function HeaderWeather(weather) {
  const weatherReceived = weather.weather;
  if (!weatherReceived || !weatherReceived.sys) {
    console.log("No weather data received");
    return null; // or some fallback UI
  }

  return (
    <View className="bg-black">
      <View style={styles.header}>
        <Text style={styles.headerTitle}>
          {weatherReceived.name}, {weatherReceived.sys.country}
        </Text>
      </View>
      <Text style={styles.temperature}>
        {Math.round(weatherReceived.main.temp)} ºC
      </Text>
      <Text style={styles.condition}>
        {weatherReceived.weather[0].description}
      </Text>
      <Text style={styles.highLow}>
        H: {Math.round(weatherReceived.main.temp_max)}° L:{" "}
        {Math.round(weatherReceived.main.temp_min)}°
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 8,
    backgroundColor: "black",
  },
  headerTitle: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
  },
  temperature: {
    color: "#FFFFFF",
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    paddingVertical: 12,
  },
  condition: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    paddingVertical: 12,
  },
  highLow: {
    color: "#FFFFFF",
    fontSize: 16,
    textAlign: "center",
    paddingVertical: 8,
  },
});
