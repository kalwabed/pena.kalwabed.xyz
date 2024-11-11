import { error, json, type RequestHandler } from '@sveltejs/kit';

import { prisma } from '$lib/providers/prisma';

export const POST = (async ({ request }) => {
  const req = await request.json();
  const slug = req.slug as string;

  if (!slug) {
    error(400, 'slug is required');
  }

  try {
    const postViewsCount = await prisma.views.upsert({
      where: {
        slug,
      },
      create: {
        slug,
        count: 1,
      },
      update: {
        count: {
          increment: 1,
        },
      },
    });

    return json(postViewsCount, { status: 201 });
  } catch (error) {
    console.error(error);
    throw error(500, 'Internal Server Error');
  }
}) satisfies RequestHandler;
