const { Set } = require('../career-week-challenges/Set');

describe('Set methods', () => {
  const data = new Set([1, 2, 3]);
  it('creates a new set', () => {

    expect(data.array).toEqual([1, 2, 3]);
  });

  it('should add to a set', () => {
    data.add(4);
    expect(data.array).toEqual([1, 2, 3, 4]);
  });

  it('prevents duplicate when adding', () => {
    data.add(1);
    expect(data.array).toEqual([1, 2, 3, 4]);
  });

  it('removes a value from a set', () => {
    data.remove(4);
    expect(data.array).toEqual([1, 2, 3])
  });
});