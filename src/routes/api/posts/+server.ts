import { error, json } from '@sveltejs/kit';

import { getResourcesAsync } from '$lib/utils/fetch-data';

/** @type {import('./$types').RequestHandler} */
export async function GET({ url }) {
  const { searchParams: q } = url;
  const limit = parseInt(q.get('limit'));
  let items = await getResourcesAsync();

  if (limit) items = items.slice(0, limit);

  if (items?.length > 0) {
    return json(items, { status: 200 });
  }

  throw error(404, 'Not found');
}
