// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  users: any;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((response) => {
      res.status(200).json({ users: response });
    });
}
