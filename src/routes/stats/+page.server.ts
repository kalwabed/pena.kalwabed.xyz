import { error } from '@sveltejs/kit';
import type { views } from '@prisma/client';

import type { PageServerLoad } from './$types';
import { prisma } from '$lib/providers/prisma';

export const load: PageServerLoad = async () => {
  try {
    const postViewsCount: views[] = await prisma.views.findMany({ orderBy: { count: 'desc' } });

    return { stats: postViewsCount };
  } catch (err) {
    console.error(err);
    throw error(500, 'Internal Server Error');
  }
};

// pindahkan juga method ketika tambah view ke file ini
