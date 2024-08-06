import Realm from "realm";
import { RealmProvider } from "@realm/react";
import { City } from "../lib/Task";

export default function RealmCustomProvider({ children }) {
  return <RealmProvider schema={[City]}>{children}</RealmProvider>;
}
