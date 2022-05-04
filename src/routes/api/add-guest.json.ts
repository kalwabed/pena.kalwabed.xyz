import type { RequestEvent } from '@sveltejs/kit/types/private';

import { prisma } from '$lib/providers/prisma';

// NOTE: ini aneh. seharusnya dijadikan satu file di guests.json tapi ternyata entah kenapa masih error 405.

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function post({ request }: RequestEvent) {
  const req = await request.json();
  const { name, body, email } = req;

  if (!name || !body || !email) {
    return {
      status: 400,
      body: {
        message: 'name, body, and email are required'
      }
    };
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

    if (!process.env.BOT_TOKEN || !process.env.BOT_GROUP_ID) {
      console.error('Missing BOT_TOKEN or BOT_GROUP_ID');
    } else {
      fetch(
        `https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage?chat_id=${
          process.env.BOT_GROUP_ID
        }&text=${encodeURIComponent(text)}&parse_mode=MarkdownV2`,
        {
          method: 'POST'
        }
      );
    }

    return {
      status: 201,
      body: guest
    };
  } catch (error) {
    console.error(error);
    return {
      status: 500,
      body: {
        error: {
          message: error.message,
          code: error.errorCode,
          clientVersion: error.clientVersion
        }
      }
    };
  }
}
