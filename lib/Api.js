const BaseURL = "https://api.openweathermap.org/data/2.5/";
const API_KEY = process.env.EXPO_PUBLIC_WEATHER_API_KEY;

// Function to get current weather by latitude and longitude
export const getCurrentWeather = async (lat, lon) => {
  try {
    const response = await fetch(
      `${BaseURL}weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    );
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error; // Re-throw the error for higher-level error handling
  }
};

// Function to get weekly weather forecast by latitude and longitude
export const getWeeklyWeather = async (lat, lon) => {
  try {
    const response = await fetch(
      `${BaseURL}forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    );
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error; // Re-throw the error for higher-level error handling
  }
};

// Function to get weekly weather forecast by city and country code
export const getWeeklyCity = async (city, countryCode) => {
  try {
    const response = await fetch(
      `${BaseURL}forecast?q=${city},${countryCode}&appid=${API_KEY}&units=metric`
    );
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error; // Re-throw the error for higher-level error handling
  }
};

// Function to get current weather by city and country name
export const getWeatherByCity = async (city, country) => {
  try {
    const response = await fetch(
      `${BaseURL}weather?q=${city},${country}&appid=${API_KEY}&units=metric`
    );
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error; // Re-throw the error for higher-level error handling
  }
};
