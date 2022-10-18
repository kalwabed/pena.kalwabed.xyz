import { generateFileMetadata, getResourcesAsync, POSTS, slugTransformer } from '../fetch-data';

describe('Test fetch post data util', () => {
  it('should get all post path', () => {
    Object.keys(POSTS).forEach(folderName => {
      // regex for /src/routes/**/+page.svx
      expect(folderName).toMatch('+page.svx');
    });
  });

  it('should generate file metadata', async () => {
    // because first post is the risky one
    const post = await generateFileMetadata(POSTS)[0];
    console.log('🚀 ~ file: fetch-data.test.ts ~ line 14 ~ it ~ post', post);

    expect(post).toHaveProperty('title', expect.any(String));
    expect(post).toHaveProperty('publishedAt', expect.any(Date));
    expect(post).toHaveProperty('desc', expect.any(String));
    expect(post).toHaveProperty('updatedAt', expect.any(Date));
    expect(post).toHaveProperty('tags', expect.any(Array));
    expect(post).toHaveProperty('slug', expect.any(String));
    expect(post).not.toHaveProperty('layout');
  });

  it('should return the most recent post items sorted', async () => {
    const posts = await getResourcesAsync();
    const firstPost = posts[0];
    const secondPost = posts[1];

    expect(firstPost.publishedAt > secondPost.publishedAt).toBe(true);
  });

  describe('return valid slug by folder name', () => {
    it('should not contain /src/routes/', () => {
      Object.keys(POSTS).forEach(folderName => {
        expect(slugTransformer(folderName)).not.toContain('/src/routes/');
      });
    });

    it('should not contain +page.svx', () => {
      Object.keys(POSTS).forEach(folderName => {
        expect(slugTransformer(folderName)).not.toContain('+page.svx');
      });
    });
  });
});
