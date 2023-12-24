import { error } from '@sveltejs/kit';
import type { views } from '@prisma/client';

import type { PageServerLoad } from './$types';
import { prisma } from '$lib/providers/prisma';

export const load = (async () => {
  try {
    const postViewsCount: views[] = await prisma.views.findMany({ orderBy: { count: 'desc' } });

    return { stats: postViewsCount };
  } catch (err) {
    console.error(err);
    error(500, 'Internal Server Error');
  }
}) satisfies PageServerLoad;
