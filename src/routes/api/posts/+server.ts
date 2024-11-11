import { error, json, type RequestHandler } from '@sveltejs/kit';

import { getResourcesAsync } from '$lib/utils/fetch-data';

export const GET = (async ({ url }) => {
  const { searchParams: q } = url;
  const limit = parseInt(q.get('limit'));
  try {
    let items = await getResourcesAsync();

    if (limit) items = items.slice(0, limit);

    if (items?.length > 0) {
      return json(items, { status: 200 });
    }

    error(404, 'Not found');
  } catch (error) {
    console.error(error);
  }
}) satisfies RequestHandler;
