// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next";

export default async function Handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method == 'GET') {
    const name = [{ name: 'John Doe' }]

    res.status(200).json(name)
  }
}
