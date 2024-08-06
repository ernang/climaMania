import Location from "../../components/Location";
import { useLocalSearchParams } from "expo-router";
import { Stack } from "expo-router/stack";

export default function Detail() {
  const loc = useLocalSearchParams();
  const { location } = loc;
  return (
    // <Screen>
    <>
      <Stack.Screen
        options={{
          headerTintColor: "white",
          headerShown: true,
          headerLeft: () => {},
          headerRight: () => {},
        }}
      />
      <Location location={location} />
    </>
    // </Screen>
  );
}
