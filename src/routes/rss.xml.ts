import app from '$lib/configs/app';
import { getResourcesAsync } from '$lib/utils/fetch-data';

const feedItem = (item: any) => {
  const postLink = app.siteUrl.concat('/', item.slug);

  return `
    <item>
      <title>![CDATA[ ${item.title} ]]</title>
      <description>![CDATA[ ${item.desc} ]]</description>
      <link>${postLink}</link>
      <guid>${postLink}</guid>
      <pubDate>${new Date(item.publishedAt).toUTCString()}</pubDate>
      <author>${app.email} (Kalwabed Rizki)</author>
    </item>
  `;
};

const renderXmlRssFeed = (items: any) => {
  return `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
      <title>${app.siteUrl.replace('https://', '')}</title>
      <link>${app.siteUrl}</link>
      <atom:link href="${app.siteUrl}/rss.xml" rel="self" type="application/xml" />
      <generator>Svelte-Kit</generator>
      <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
      <language>id</language>
      <description>${app.siteDescription}</description>
      <copyright>All rights reserved ${new Date().getFullYear()}, Kalwabed Rizki</copyright>
      ${items.map(feedItem).join('\n')}
    </channel>
  </rss>
  `;
};

export async function get() {
  const feed = renderXmlRssFeed(await getResourcesAsync());

  return {
    headers: {
      'Cache-Control': `max-age=0, s-max-age=${600}`,
      'Content-Type': 'application/xml'
    },
    body: feed
  };
}
