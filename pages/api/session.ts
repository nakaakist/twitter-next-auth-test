// This is an example of how to read a JSON Web Token from an API route
import { NextApiRequest, NextApiResponse } from "next";
import { unstable_getServerSession } from "next-auth";
import { authOptions } from "./auth/[...nextauth]";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await unstable_getServerSession(req, res, authOptions);

  console.log("session", JSON.stringify(session, null, 2));

  res.status(200).json(session);
};

export default handler;
