import { error, invalid } from '@sveltejs/kit';

import type { PageServerLoad, Actions } from './$types';
import { prisma } from '$lib/providers/prisma';

export const load: PageServerLoad = async () => {
  try {
    const guests = await prisma.guestBook.findMany({ orderBy: { created_at: 'desc' } });

    return { guests };
  } catch (err) {
    console.error(err);
    throw error(500, 'Internal Server Error');
  }
};

export const actions: Actions = {
  default: async ({ request, fetch }) => {
    const data = await request.formData();
    const name = data.get('name') as string;
    const body = data.get('body') as string;
    const email = data.get('email') as string;
    console.log('🚀 ~ file: +page.server.ts ~ line 23 ~ default: ~ email', email);

    if (!name || !body || !email) {
      return invalid(400, { msg: 'Nama, Pesan, dan Email wajib diisi' });
    }

    try {
      await prisma.guestBook.create({
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

      return { msg: 'Yayy' };
    } catch (err) {
      throw error(500, 'Internal Server Error');
    }
  }
};
