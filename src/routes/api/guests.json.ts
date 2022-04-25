import { prisma } from '$lib/providers/prisma';
import type { RequestEvent } from '@sveltejs/kit/types/private';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get() {
  const guests = await prisma.guestBook.findMany();

  return {
    status: 200,
    body: guests
  };
}

export async function post({ request }: RequestEvent) {
  console.log(await request.json());

  const guest = await prisma.guestBook.create({
    data: {
      name: new Date().toISOString(),
      body: new Date().toISOString(),
      email: `${new Date().toISOString()}@yay.com`
    }
  });

  return {
    status: 201,
    body: guest
  };
}
