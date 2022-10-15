import { json, error } from '@sveltejs/kit';

import { prisma } from '$lib/providers/prisma';

export type Guest = {
  id?: string;
  name: string;
  email: string;
  body: string;
  created_at?: string;
  updated_at?: string;
};

/** @type {import('./$types').RequestHandler} */
export async function GET() {
  try {
    const guests = await prisma.guestBook.findMany();

    return json(guests, { status: 200 });
  } catch (err) {
    console.error(err);
    throw error(500, 'Internal Server Error');
  }
}
