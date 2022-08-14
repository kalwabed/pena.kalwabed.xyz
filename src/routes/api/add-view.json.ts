import type { RequestEvent } from '@sveltejs/kit';

import { prisma } from '$lib/providers/prisma';

export async function POST({ request }: RequestEvent) {
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
