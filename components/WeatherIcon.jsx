import { StyleSheet, View } from "react-native";
import {
  Sun,
  PartialCloud,
  Cloud,
  BrokenCloud,
  ShowerRain,
  Rain,
  Thunderstorm,
  Snow,
  Mist,
} from "./Icons";

export function WeatherIcon(weather) {
  return (
    <View style={styles.iconContainer}>
      {weather.weather === "clear sky" && <Sun />}
      {weather.weather === "few clouds" && <PartialCloud />}
      {weather.weather === "scattered clouds" && <Cloud />}
      {weather.weather === "overcast clouds" && <Cloud />}
      {weather.weather === "broken clouds" && <BrokenCloud />}
      {weather.weather === "shower rain" && <ShowerRain />}
      {weather.weather === "rain" && <Rain />}
      {weather.weather === "light rain" && <Rain />}
      {weather.weather === "moderate rain" && <Rain />}
      {weather.weather === "heavy intensity rain" && <Rain />}
      {weather.weather === "very heavy rain" && <Rain />}
      {weather.weather === "extreme rain" && <Rain />}
      {weather.weather === "light intensity shower rain" && <ShowerRain />}
      {weather.weather === "heavy intensity shower rain" && <ShowerRain />}
      {weather.weather === "ragged shower rain" && <ShowerRain />}
      {weather.weather === "thunderstorm" && <Thunderstorm />}
      {weather.weather === "light thunderstorm" && <Thunderstorm />}
      {weather.weather === "heavy thunderstorm" && <Thunderstorm />}
      {weather.weather === "ragged thunderstorm" && <Thunderstorm />}
      {weather.weather === "thunderstorm with light rain" && <Thunderstorm />}
      {weather.weather === "thunderstorm with rain" && <Thunderstorm />}
      {weather.weather === "thunderstorm with heavy rain" && <Thunderstorm />}
      {weather.weather === "thunderstorm with light drizzle" && (
        <Thunderstorm />
      )}
      {weather.weather === "thunderstorm with drizzle" && <Thunderstorm />}
      {weather.weather === "thunderstorm with heavy drizzle" && (
        <Thunderstorm />
      )}
      {weather.weather === "snow" && <Snow />}
      {weather.weather === "light snow" && <Snow />}
      {weather.weather === "heavy snow" && <Snow />}
      {weather.weather === "light rain and snow" && <Snow />}
      {weather.weather === "rain and snow" && <Snow />}
      {weather.weather === "light shower snow" && <Snow />}
      {weather.weather === "shower snow" && <Snow />}
      {weather.weather === "heavy shower snow" && <Snow />}
      {weather.weather === "mist" && <Mist />}
    </View>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    backgroundColor: "#333333",
    borderRadius: 8,
    padding: 8,
  },
});
