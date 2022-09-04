import { prisma } from '$lib/providers/prisma';

export type Views = {
  count: number;
  slug: string;
};

export async function GET() {
  try {
    const postViewsCount = await prisma.views.findMany({ orderBy: { count: 'desc' } });

    return {
      status: 200,
      body: { stats: postViewsCount }
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
