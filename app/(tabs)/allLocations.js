import Toast from "react-native-toast-message";
import { ViewAllLocations } from "../../components/AllLocations";

export default function allLocations() {
  return (
    <>
      <ViewAllLocations />
      <Toast />
    </>
  );
}
