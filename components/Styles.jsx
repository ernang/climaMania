// styles.js

import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  centeredContent: {
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#228B22",
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: "80%",
    borderColor: "#228B22",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    color: "#228B22",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#228B22",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    marginLeft: 10,
  },
  weatherInfo: {
    marginTop: 20,
    alignItems: "center",
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#228B22",
    marginTop: 10,
  },
  subheading: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#228B22",
    marginTop: 10,
  },
  weatherText: {
    color: "#228B22",
    fontSize: 16,
    marginBottom: 8,
  },
});
