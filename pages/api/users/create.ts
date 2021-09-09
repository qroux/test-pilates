// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { createUser } from "../../../services/userDB";

type Data = {
  user: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    const response = await createUser(req.body);

    return response.insertedId
      ? res.json({ user: response })
      : res.status(400).send(response.details);
  }
  return res.redirect("/");
}
