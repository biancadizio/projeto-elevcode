import { login } from "@/api/auth";

import type { NextApiRequest, NextApiResponse } from 'next'
 
export default async function handler(

  req: NextApiRequest,
  res: NextApiResponse
) {

    try {

        const { email, password } = JSON.parse(req.body);
    
const response = await login(email, password);

       return res.status(200).json(response )
      } catch (error) {

         return res.status(500).json("Authentication failed. Please check your credentials.");
      }
}
