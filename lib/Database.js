export async function getCities(realm) {
  return realm.objects("City").sorted("city").limit(4);
}

export async function getAllCities() {
  try {
    const result = [];
    return result;
  } catch (error) {
    console.error("Error fetching cities:", error);
    return [];
  }
}

export async function getAllCitiesSync() {
  try {
    const result = [];
    return result;
  } catch (error) {
    console.error("Error fetching cities:", error);
    return [];
  }
}

export async function getLocations() {
  try {
    const locations = [];
    return locations;
  } catch (error) {
    console.error("Error fetching locations:", error);
    return [];
  }
}

export async function insertCity(realm, city, countryCode) {
  try {
    const existingCity = realm
      .objects("City")
      .filtered("city == $0 && countryCode == $1", city, countryCode);
    if (existingCity.length > 0) {
      console.log("City already exists");
      return;
    }

    realm.write(() => {
      realm.create("City", {
        city: city,
        countryCode: countryCode,
      });
    });
    console.log(realm.objects("City"));
    return;
  } catch (error) {
    console.log("Error inserting city:", error);
  }
}

export async function deleteCity(realm, city, countryCode) {
  console.log("Deleting city: ", city, countryCode);
  try {
    realm.write(() => {
      const cityToDelete = realm
        .objects("City")
        .filtered("city == $0 && countryCode == $1", city, countryCode);
      realm.delete(cityToDelete);
    });
    console.warn("City deleted successfully");
    return;
  } catch (error) {
    console.log("Error deleting city:", error);
  }
}
