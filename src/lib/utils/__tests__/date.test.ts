import { dateFormatter } from '../date';

describe('Test date util', () => {
  it('should return empty string if date is null', () => {
    expect(dateFormatter(null)).toBe('');
  });

  it('should return formatted date', () => {
    expect(dateFormatter('2022-05-01')).toBe('1 Mei 2022');
  });
});
