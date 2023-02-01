import type { NextApiRequest, NextApiResponse } from "next"
import { useRouter } from 'next/router'
import prisma from "@/lib/prisma"
import z from 'zod'

export default async function handler
  (req: NextApiRequest, res: NextApiResponse) {
  const pid = z.string().parse(req.query.pid)
  const data = await prisma.ted.findUnique({ where: { id: pid } })
  res.json(
    data
  )
  // return new Response(
  //   JSON.stringify({
  //     name: 'Jim Halpert',
  //   }),
  //   {
  //     status: 200,
  //     headers: {
  //       'content-type': 'application/json',
  //     },
  //   }
  // )
}