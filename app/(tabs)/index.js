import React, { useState, useEffect, useCallback } from "react";
import { ScrollView, RefreshControl } from "react-native";
import Toast from "react-native-toast-message";
import * as Location from "expo-location";
import { Daily } from "../../components/Daily";

export default function Layout() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [refreshing, setRefreshing] = useState(false);

  const getLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    setLocation(location);
  };

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <>
      <Daily loc={location} />
      <Toast />
    </>
  );
}
