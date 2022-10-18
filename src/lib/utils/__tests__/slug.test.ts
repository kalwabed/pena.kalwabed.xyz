import { deslugify, slugify } from '../slug';

describe('Test slug util', () => {
  const slug = 'test-slug';
  const deslug = 'test slug';

  it('should return valid slugify string format', () => {
    expect(slugify(deslug)).toBe(slug);
  });

  it('should return valid deslugify string format', () => {
    expect(deslugify(slug)).toBe(deslug);
  });
});
