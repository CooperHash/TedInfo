import type { NextApiRequest, NextApiResponse } from "next"
import prisma from "@/lib/prisma"

export default async function handler
    (req: NextApiRequest, res: NextApiResponse) {
    try {
        const data = await prisma.ted.findMany()
        console.log('data', data);
        res.json(
            data
        )
    } catch (error) {
        console.log(error);

    }


}