import type { RequestEvent } from '@sveltejs/kit/types/private';

import { getResourcesAsync } from '$lib/utils/fetch-data';
import type { ResourceKind } from '$lib/utils/fetch-data';

export async function get({ params, url: { searchParams: q } }: RequestEvent<{ kind: ResourceKind }>) {
  const limit = parseInt(q.get('limit'));
  let items = await getResourcesAsync(params.kind);

  if (limit) items = items.slice(0, limit);

  if (items.length > 0) {
    return {
      status: 200,
      headers: {
        'content-type': 'application/json'
      },
      body: items
    };
  }

  return {
    status: 404,
    body: []
  };
}
