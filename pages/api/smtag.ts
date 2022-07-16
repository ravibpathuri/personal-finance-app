// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type SocialmediaTag = {
  title: string;
  description: string;
  image?: string;
  site?: string;
  card?: string;
};

export type SocialmediaTags = {
  twitter?: SocialmediaTag;
  fb?: SocialmediaTag;
  wa?: SocialmediaTag;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<SocialmediaTags>
) {
  res.status(200).json({ twitter: { title: "test", description: "test" } });
}
