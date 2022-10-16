import { json, error, type RequestHandler } from '@sveltejs/kit';

import { prisma } from '$lib/providers/prisma';

export type Guest = {
  id?: string;
  name: string;
  email: string;
  body: string;
  created_at?: string;
  updated_at?: string;
};

export const GET: RequestHandler = async () => {
  try {
    const guests = await prisma.guestBook.findMany();

    return json(guests, { status: 200 });
  } catch (err) {
    console.error(err);
    throw error(500, 'Internal Server Error');
  }
};
