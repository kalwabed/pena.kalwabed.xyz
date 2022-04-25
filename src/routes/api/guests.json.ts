import type { RequestEvent } from '@sveltejs/kit/types/private';

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
