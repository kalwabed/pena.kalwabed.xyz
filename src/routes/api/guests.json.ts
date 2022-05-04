import { prisma } from '$lib/providers/prisma';

export type Guest = {
  id?: string;
  name: string;
  email: string;
  body: string;
  created_at?: string;
  updated_at?: string;
};

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get() {
  try {
    const guests = await prisma.guestBook.findMany();

    return {
      status: 200,
      body: guests
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
