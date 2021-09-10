import clientPromise from "../lib/mongodb";
import { userSchema } from "../lib/schemas";

export const setUsersSchema = async () => {
  const client = await clientPromise;

  try {
    const usersCollection = await client
      .db()
      .listCollections({ name: "users" })
      .toArray();

    if (usersCollection[0]) return "Users collection already set";

    await client.db().createCollection("users", userSchema);
    await client
      .db()
      .collection("users")
      .createIndex({ email: 1 }, { unique: true });

    return "Users collection + validation Schema created";
  } catch (err) {
    console.log("USER SCHEMA ERROR =", err);
    return err;
  }
};

export const createUser = async (inputs: Inputs) => {
  const client = await clientPromise;

  try {
    const response = await client.db().collection("users").insertOne(inputs);

    return { created: true, content: response };
  } catch (err: any) {
    return err.code === 11000
      ? { created: false, content: "Email déjà utilisé" }
      : { created: false, content: err.message };
  }
};

export const fetchUsers = async () => {
  const client = await clientPromise;

  const users = client
    .db()
    .collection("users")
    .find({})
    .sort({ metacritic: -1 })
    .limit(20)
    .toArray();

  return users;
};

interface Inputs {
  firstName: string;
  lastName: string;
  email: string;
}
