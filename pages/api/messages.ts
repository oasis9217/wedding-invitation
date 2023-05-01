import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

class CustomError extends Error {
  code: number;

  constructor(code: number, message: string) {
    super(message);
    this.code = code;
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === 'POST') {
      const { writer, message } = JSON.parse(req.body);

      if (writer.length < 2 || message.length < 3) {
        throw new CustomError(400, "글쓴이 혹은 메세지가 너무 짧습니다.")
      }

      if (writer.length > 15 || message.length > 100) {
        throw new CustomError(400, "글쓴이 혹은 메세지가 너무 깁니다.")
      }

      const newMessage = await prisma.message.create({
        data: {
          writer,
          message,
        }
      })

      res.status(201).json({
        status: 'MESSAGE SAVED',
        data: newMessage
      });
    } else if (req.method === 'GET') {
      let messages = await prisma.message.findMany({
        orderBy: { id: 'desc'}
      })
      messages = JSON.parse(JSON.stringify(messages))

      res.status(200).json(messages);
    } else {
      res.status(200).json({
        MESSAGE: "NO OP"
      })
    }

    return;
  } catch(err) {
    if (err instanceof CustomError) {
      return res.status(err.code).json({message: err.message});
    }
    if (err instanceof Error) {
      return res.status(500).json({message: err.message});
    }
  }
}
