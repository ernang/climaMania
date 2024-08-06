import { Image } from "react-native";

export function WeatherImage(weather) {
  return (
    <>
      {weather.weather === "clear sky" && (
        <Image
          source={require("../assets/Weather/sunnyWeather.png")}
          className="w-28 h-28 rounded-full mb-2"
        />
      )}
      {weather.weather === "few clouds" && (
        <Image
          source={require("../assets/Weather/cloudyWeather.png")}
          className="w-28 h-28 rounded-full mb-2"
        />
      )}
      {weather.weather === "scattered clouds" && (
        <Image
          source={require("../assets/Weather/cloudyWeather.png")}
          className="w-28 h-28 rounded-full mb-2"
        />
      )}
      {weather.weather === "overcast clouds" && (
        <Image
          source={require("../assets/Weather/cloudyWeather.png")}
          className="w-28 h-28 rounded-full mb-2"
        />
      )}
      {weather.weather === "broken clouds" && (
        <Image
          source={require("../assets/Weather/cloudyWeather.png")}
          className="w-28 h-28 rounded-full mb-2"
        />
      )}
      {weather.weather === "shower rain" && (
        <Image
          source={require("../assets/Weather/rainyWeather.png")}
          className="w-28 h-28 rounded-full mb-2"
        />
      )}
      {weather.weather === "rain" && (
        <Image
          source={require("../assets/Weather/rainyWeather.png")}
          className="w-28 h-28 rounded-full mb-2"
        />
      )}
      {weather.weather === "light rain" && (
        <Image
          source={require("../assets/Weather/rainyWeather.png")}
          className="w-28 h-28 rounded-full mb-2"
        />
      )}
      {weather.weather === "moderate rain" && (
        <Image
          source={require("../assets/Weather/rainyWeather.png")}
          className="w-28 h-28 rounded-full mb-2"
        />
      )}
      {weather.weather === "heavy intensity rain" && (
        <Image
          source={require("../assets/Weather/rainyWeather.png")}
          className="w-28 h-28 rounded-full mb-2"
        />
      )}
      {weather.weather === "very heavy rain" && (
        <Image
          source={require("../assets/Weather/rainyWeather.png")}
          className="w-28 h-28 rounded-full mb-2"
        />
      )}
      {weather.weather === "extreme rain" && (
        <Image
          source={require("../assets/Weather/rainyWeather.png")}
          className="w-28 h-28 rounded-full mb-2"
        />
      )}
      {weather.weather === "light intensity shower rain" && (
        <Image
          source={require("../assets/Weather/rainyWeather.png")}
          className="w-28 h-28 rounded-full mb-2"
        />
      )}
      {weather.weather === "heavy intensity shower rain" && (
        <Image
          source={require("../assets/Weather/rainyWeather.png")}
          className="w-28 h-28 rounded-full mb-2"
        />
      )}
      {weather.weather === "ragged shower rain" && (
        <Image
          source={require("../assets/Weather/rainyWeather.png")}
          className="w-28 h-28 rounded-full mb-2"
        />
      )}
      {weather.weather === "thunderstorm" && (
        <Image
          source={require("../assets/Weather/thunderStormWeather.png")}
          className="w-28 h-28 rounded-full mb-2"
        />
      )}
      {weather.weather === "light thunderstorm" && (
        <Image
          source={require("../assets/Weather/thunderStormWeather.png")}
          className="w-28 h-28 rounded-full mb-2"
        />
      )}
      {weather.weather === "heavy thunderstorm" && (
        <Image
          source={require("../assets/Weather/thunderStormWeather.png")}
          className="w-28 h-28 rounded-full mb-2"
        />
      )}
      {weather.weather === "ragged thunderstorm" && (
        <Image
          source={require("../assets/Weather/thunderStormWeather.png")}
          className="w-28 h-28 rounded-full mb-2"
        />
      )}
      {weather.weather === "thunderstorm with light rain" && (
        <Image
          source={require("../assets/Weather/thunderStormWeather.png")}
          className="w-28 h-28 rounded-full mb-2"
        />
      )}
      {weather.weather === "thunderstorm with rain" && (
        <Image
          source={require("../assets/Weather/thunderStormWeather.png")}
          className="w-28 h-28 rounded-full mb-2"
        />
      )}
      {weather.weather === "thunderstorm with heavy rain" && (
        <Image
          source={require("../assets/Weather/thunderStormWeather.png")}
          className="w-28 h-28 rounded-full mb-2"
        />
      )}
      {weather.weather === "thunderstorm with light drizzle" && (
        <Image
          source={require("../assets/Weather/thunderStormWeather.png")}
          className="w-28 h-28 rounded-full mb-2"
        />
      )}
      {weather.weather === "thunderstorm with drizzle" && (
        <Image
          source={require("../assets/Weather/thunderStormWeather.png")}
          className="w-28 h-28 rounded-full mb-2"
        />
      )}
      {weather.weather === "thunderstorm with heavy drizzle" && (
        <Image
          source={require("../assets/Weather/thunderStormWeather.png")}
          className="w-28 h-28 rounded-full mb-2"
        />
      )}
      {weather.weather === "snow" && (
        <Image
          source={require("../assets/Weather/snowyWeather.png")}
          className="w-28 h-28 rounded-full mb-2"
        />
      )}
      {weather.weather === "light snow" && (
        <Image
          source={require("../assets/Weather/snowyWeather.png")}
          className="w-28 h-28 rounded-full mb-2"
        />
      )}
      {weather.weather === "heavy snow" && (
        <Image
          source={require("../assets/Weather/snowyWeather.png")}
          className="w-28 h-28 rounded-full mb-2"
        />
      )}
      {weather.weather === "light rain and snow" && (
        <Image
          source={require("../assets/Weather/snowyWeather.png")}
          className="w-28 h-28 rounded-full mb-2"
        />
      )}
      {weather.weather === "rain and snow" && (
        <Image
          source={require("../assets/Weather/snowyWeather.png")}
          className="w-28 h-28 rounded-full mb-2"
        />
      )}
      {weather.weather === "light shower snow" && (
        <Image
          source={require("../assets/Weather/snowyWeather.png")}
          className="w-28 h-28 rounded-full mb-2"
        />
      )}
      {weather.weather === "shower snow" && (
        <Image
          source={require("../assets/Weather/snowyWeather.png")}
          className="w-28 h-28 rounded-full mb-2"
        />
      )}
      {weather.weather === "heavy shower snow" && (
        <Image
          source={require("../assets/Weather/snowyWeather.png")}
          className="w-28 h-28 rounded-full mb-2"
        />
      )}
      {weather.weather === "mist" && (
        <Image
          source={require("../assets/Weather/mistyWeather.png")}
          className="w-28 h-28 rounded-full mb-2"
        />
      )}
      {weather.weather === "mist" && (
        <Image
          source={require("../assets/Weather/mistyWeather.png")}
          className="w-28 h-28 rounded-full mb-2"
        />
      )}
      {weather.weather === "smoke" && (
        <Image
          source={require("../assets/Weather/mistyWeather.png")}
          className="w-28 h-28 rounded-full mb-2"
        />
      )}
      {weather.weather === "haze" && (
        <Image
          source={require("../assets/Weather/mistyWeather.png")}
          className="w-28 h-28 rounded-full mb-2"
        />
      )}
      {weather.weather === "sand/dust whirls" && (
        <Image
          source={require("../assets/Weather/mistyWeather.png")}
          className="w-28 h-28 rounded-full mb-2"
        />
      )}
      {weather.weather === "fog" && (
        <Image
          source={require("../assets/Weather/mistyWeather.png")}
          className="w-28 h-28 rounded-full mb-2"
        />
      )}
      {weather.weather === "sand" && (
        <Image
          source={require("../assets/Weather/mistyWeather.png")}
          className="w-28 h-28 rounded-full mb-2"
        />
      )}
      {weather.weather === "dust" && (
        <Image
          source={require("../assets/Weather/mistyWeather.png")}
          className="w-28 h-28 rounded-full mb-2"
        />
      )}
      {weather.weather === "volcanic ash" && (
        <Image
          source={require("../assets/Weather/mistyWeather.png")}
          className="w-28 h-28 rounded-full mb-2"
        />
      )}
      {weather.weather === "squalls" && (
        <Image
          source={require("../assets/Weather/mistyWeather.png")}
          className="w-28 h-28 rounded-full mb-2"
        />
      )}
      {weather.weather === "tornado" && (
        <Image
          source={require("../assets/Weather/mistyWeather.png")}
          className="w-28 h-28 rounded-full mb-2"
        />
      )}
    </>
  );
}
