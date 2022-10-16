import { error, json, type RequestHandler } from '@sveltejs/kit';

import { prisma } from '$lib/providers/prisma';

// NOTE: ini aneh. seharusnya dijadikan satu file di guests.json tapi ternyata entah kenapa masih error 405.

export const POST: RequestHandler = async ({ request }) => {
  const req = await request.json();
  const { name, body, email } = req;

  if (!name || !body || !email) {
    throw error(400, 'name, body, and email are required');
  }

  try {
    const guest = await prisma.guestBook.create({
      data: {
        name,
        body,
        email
      }
    });

    const escapedText = (text: string) => {
      // eslint-disable-next-line no-useless-escape
      return text.replace(/[\_\*\[\]\(\)\~\`\>\#\+\-\=\|\{\}\.]/g, '\\$&');
    };

    // reference https://core.telegram.org/bots/api#sendmessage
    const text = `
*New Guest Book Entry*
Name: ||${escapedText(name)}||
Email: ||${escapedText(email)}||
Message: ||${escapedText(body)}||
    `;

    if (process.env.BOT_TOKEN && process.env.BOT_GROUP_ID) {
      await fetch(
        `https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage?chat_id=${
          process.env.BOT_GROUP_ID
        }&text=${encodeURIComponent(text)}&parse_mode=MarkdownV2`,
        {
          method: 'POST'
        }
      );
    }

    return json(guest, { status: 201 });
  } catch (err) {
    console.error(err);
    throw error(500, 'Internal Server Error');
  }
};
