import type { RequestEvent } from '@sveltejs/kit';

import { getResourcesAsync } from '$lib/utils/fetch-data';

export async function get({ url: { searchParams: q } }: RequestEvent) {
  const limit = parseInt(q.get('limit'));
  let items = await getResourcesAsync();

  if (limit) items = items.slice(0, limit);

  if (items.length > 0) {
    return {
      status: 200,
      body: items
    };
  }

  return {
    status: 404,
    body: []
  };
}
