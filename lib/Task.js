import Realm, { BSON, createRealmContext } from "realm";

export class City extends Realm.Object {
  static schema = {
    name: "City",
    properties: {
      _id: {
        type: "objectId",
        default: () => new BSON.ObjectId(),
      },
      city: "string",
      countryCode: "string",
    },
    primaryKey: "_id",
  };
}
