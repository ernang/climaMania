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
