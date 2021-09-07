// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import fetchUsers from "../../services/fetchUsers";

type Data = {
  users: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const users = await fetchUsers();
  res.json({ users });
}
