import clientPromise from "../lib/mongodb";

export const fetchUsers = async () => {
  const db = await clientPromise;

  const users = db
    .db()
    .collection("users")
    .find({})
    .sort({ metacritic: -1 })
    .limit(20)
    .toArray();

  return users;
};
