import { NextApiRequest, NextApiResponse } from "next";

const MOVIE_API_URL = "https://moviesdatabase.p.rapidapi.com/titles";
const MOVIE_API_KEY = process.env.MOVIE_API_KEY;

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const response = await fetch(MOVIE_API_URL, {
      headers: {
        "X-RapidAPI-Key": MOVIE_API_KEY!,
        "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch data from the API");
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export default handler;
