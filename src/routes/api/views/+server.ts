import { prisma } from '$lib/providers/prisma';
import { error, json, type RequestHandler } from '@sveltejs/kit';

export type Views = {
  count: number;
  slug: string;
};

export const GET: RequestHandler = async () => {
  try {
    const postViewsCount = await prisma.views.findMany({ orderBy: { count: 'desc' } });

    return json({ stats: postViewsCount }, { status: 200 });
  } catch (err) {
    console.error(err);
    throw error(500, 'Internal Server Error');
  }
};
