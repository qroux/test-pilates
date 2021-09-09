import clientPromise from "../lib/mongodb";

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

export const createUser = async (inputs: Inputs) => {
  const client = await clientPromise;

  try {
    const response = await client.db().collection("users").insertOne(inputs);
    console.log("response =", response);
    return response;
  } catch (err: any) {
    return Object.keys(err.keyPattern)[0] === "email"
      ? { details: "Email déjà utilisé", error: err }
      : { details: "Unknown error", error: err };
  }
};
