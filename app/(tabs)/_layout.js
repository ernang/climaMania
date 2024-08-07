import { Tabs } from "expo-router";
import { Home, MapMarker, SearchLoc } from "../../components/Icons";
export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: "#000" },
        headerStyle: { backgroundColor: "black" },
        tabBarActiveTintColor: "#d6d6ce",
        tabBarInactiveTintColor: "#7b7b7b",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <Home color={color} />,
        }}
      />
      <Tabs.Screen
        name="allLocations"
        options={{
          title: "All Locations",
          tabBarIcon: ({ color }) => <MapMarker color={color} />,
        }}
      />
      <Tabs.Screen
        name="searchLocation"
        options={{
          title: "Add",
          tabBarIcon: ({ color }) => <SearchLoc color={color} />,
        }}
      />
    </Tabs>
  );
}
