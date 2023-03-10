import type { NextApiRequest, NextApiResponse } from "next"
import prisma from "@/lib/prisma"
import z from 'zod'

export default async function handler
  (req: NextApiRequest, res: NextApiResponse) {
  const pid = z.string().parse(req.query.pid)
  const data = await prisma.ted.findUnique({ where: { id: pid } })
  console.log('data', data);

  res.json(
    data
  )
}