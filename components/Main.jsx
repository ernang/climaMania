// App.js

import React from "react";
import { Weather } from "./Weather";
import { Screen } from "./Screen";

export function Main() {
  return (
    <Screen>
      <Weather />
    </Screen>
  );
}
