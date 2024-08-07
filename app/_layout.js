import { Link, Stack } from "expo-router";
import { Pressable, View } from "react-native";
import { Screen } from "../components/Screen";
import RealmCustomProvider from "../providers/Realm";
export default function Layout({ children }) {
  return (
    <Screen>
      <RealmCustomProvider>
        <Stack
          screenOptions={{
            headerStyle: { backgroundColor: "black" },
            headerTitle: "",
            headerShown: false,
          }}
          
        />
        {children}
      </RealmCustomProvider>
    </Screen>
  );
}
