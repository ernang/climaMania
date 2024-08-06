import dayjs from "dayjs";
import { useState, useEffect } from "react";
import { Text, View, FlatList, Image } from "react-native";
import { WeatherImage } from "../WeatherImages";

export function FiveDayForecast({ weeklyWeather }) {
  const [forecastData, setForecastData] = useState([]);

  useEffect(() => {
    if (weeklyWeather && weeklyWeather.list) {
      const uniqueDates = new Set();
      const extractedData = weeklyWeather.list.reduce((acc, item) => {
        const date = item.dt_txt.split(" ")[0];
        if (!uniqueDates.has(date)) {
          uniqueDates.add(date);
          acc.push({
            dt: item.dt,
            date: item.dt_txt,
            temperature: item.main.temp,
            feelsLike: item.main.feels_like,
            tempMin: item.main.temp_min,
            tempMax: item.main.temp_max,
            pressure: item.main.pressure,
            humidity: item.main.humidity,
            weatherMain: item.weather[0].main,
            weatherDescription: item.weather[0].description,
            windSpeed: item.wind.speed,
            windDeg: item.wind.deg,
            windGust: item.wind.gust,
            visibility: item.visibility,
            clouds: item.clouds.all,
          });
        }
        return acc;
      }, []);
      setForecastData(extractedData);
    }
  }, [weeklyWeather]);

  return (
    <View className="px-3">
      <FlatList
        fadingEdgeLength={25}
        horizontal={true}
        data={forecastData}
        keyExtractor={(item) => item.date}
        renderItem={({ item }) => {
          return (
            <View className="flex-1 justify-center items-center p-2 m-1">
              <WeatherImage weather={item.weatherDescription} />
              <Text className="text-white text-lg font-bold mb-1">
                {dayjs(item.dt * 1000).format("ddd")}
              </Text>
              <Text className="text-white text-xs capitalize mb-1">
                {item.weatherDescription}
              </Text>
              <Text className="text-white text-sm">
                H: {Math.round(item.tempMax)}° L: {Math.round(item.tempMin)}°
              </Text>
            </View>
          );
        }}
      />
    </View>
  );
}
