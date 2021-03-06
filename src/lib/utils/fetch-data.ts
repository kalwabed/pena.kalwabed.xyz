import matter from 'gray-matter';

export interface Post {
  title: string;
  publishedAt: string;
  updatedAt: string;
  tags: string[];
  layout: string;
  slug: string;
  draft: boolean;
  type: string;
}

const POSTS = import.meta.glob('/src/routes/**/index.svx', {
  as: 'raw'
});

export const getResourcesAsync = async (): Promise<Post[]> => {
  const validFiles = POSTS ?? [];
  const fileMetadata = Object.keys(validFiles).map(async (filename): Promise<Post> => {
    const postContent = validFiles[filename] as string;
    const { data } = matter(postContent);
    const slug = filename?.replace(new RegExp('/src/routes/(.*)/index.svx'), '$1');

    return {
      ...(data as Post),
      slug
    };
  });

  const result = await Promise.all(fileMetadata);

  return result
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .filter(({ draft }) => !draft);
};
