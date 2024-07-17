import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { cep } = JSON.parse(req.body);

    const response = await fetch(`https://brasilapi.com.br/api/cep/v1/${cep}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("CEP inexistente, tente novamente.");
    }

    const data = await response.json();

    if (data.error) {
      throw new Error("CEP inexistente, tente novamente.");
    }

    return res.status(200).json(data);
  } catch (error: any) {
    return res
      .status(500)
      .json({ message: error.message || "Failed to fetch CEP information." });
  }
}
