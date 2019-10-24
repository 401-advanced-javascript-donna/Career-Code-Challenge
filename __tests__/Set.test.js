const { Set } = require('../career-week-challenges/Set');

describe('Set methods', () => {

  it('creates a new set', () => {
    const data = new Set([1, 2, 3]);
    expect(data.array).toEqual([1, 2, 3]);
  });

  it('should add to a set', () => {
    const data = new Set([3, 2]);
    data.add(1);
    expect(data.array).toEqual([3, 2, 1]);
  });


});