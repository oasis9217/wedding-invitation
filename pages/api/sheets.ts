import { NextApiRequest, NextApiResponse } from 'next';
import { google } from 'googleapis';
import { CustomError } from '@/libs/errors';

const targets = ['https://www.googleapis.com/auth/spreadsheets'];
const jwt = new google.auth.JWT(
  process.env.GOOGLE_API_CLIENT_EMAIL,
  undefined,
  (process.env.GOOGLE_API_PRIVATE_KEY || '').replace(/\\n/g, '\n'),
  targets,
);
const sheets = google.sheets({ version: 'v4', auth: jwt });

export async function appendMessage(writer: string, message: string) {
  try {
    const now = new Date();
    // @ts-ignore
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEETS_ID,
      range: 'messages', // sheet name
      valueInputOption: 'USER_ENTERED',
      resource: {
        values: [[writer, message, now.toISOString()]],
      },
    });

    return response;
  } catch (err) {
    console.log('appendMessage()', err);
  }
  return [];
}

export async function getMessageList() {
  try {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_SHEETS_ID,
      range: 'messages', // sheet name
    });

    const rows = response.data.values;

    if (rows && rows.length) {
      return rows
        .map((row) => ({
          writer: row[0],
          message: row[1],
          createdAt: row[2],
        }))
        .reverse();
    }
  } catch (err) {
    console.log('getMessageList()', err);
  }
  return [];
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'POST') {
      const { writer, message } = JSON.parse(req.body);

      if (writer.length < 2 || message.length < 3) {
        throw new CustomError(400, '글쓴이 혹은 메세지가 너무 짧습니다.');
      }

      if (writer.length > 15 || message.length > 500) {
        throw new CustomError(400, '글쓴이 혹은 메세지가 너무 깁니다.');
      }

      let result = await appendMessage(writer, message);
      res.status(201).json(result);
    } else if (req.method === 'GET') {
      let messages = await getMessageList();
      res.status(200).json(messages);
    } else {
      res.status(200).json({
        MESSAGE: 'NO OP',
      });
    }

    return;
  } catch (err) {
    console.log('API /api/sheets', err);

    if (err instanceof CustomError) {
      return res.status(err.code).json({ message: err.message });
    }
    if (err instanceof Error) {
      return res.status(500).json({ message: err.message });
    }
  }
}
