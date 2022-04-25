import type { RequestEvent } from '@sveltejs/kit/types/private';

import { prisma } from '$lib/providers/prisma';

export type Views = {
  count: number;
  slug: string;
};

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get({ url: { searchParams: q } }: RequestEvent) {
  const slug = q.get('slug');
  if (!slug)
    return {
      status: 400,
      body: {
        message: 'slug is required'
      }
    };

  try {
    const postViewsCount = await prisma.views.findUnique({
      where: {
        slug
      }
    });

    return {
      status: 200,
      body: postViewsCount
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
  const slug = req.slug as string;

  if (!slug) {
    return {
      status: 400,
      body: {
        message: 'slug is required'
      }
    };
  }

  try {
    const postViewsCount = await prisma.views.upsert({
      where: {
        slug
      },
      create: {
        slug,
        count: 1
      },
      update: {
        count: {
          increment: 1
        }
      }
    });

    return {
      status: 201,
      body: postViewsCount
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
