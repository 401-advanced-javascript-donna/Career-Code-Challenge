const { Set } = require('../career-week-challenges/Set');

describe('Set methods', () => {
  it('creates a new set', () => {
    const data = new Set([1, 2, 3]);
    expect(data.array).toEqual([1, 2, 3]);
  });
  
  it('should add to a set', () => {
    const data = new Set([1, 2, 3]);
    data.add(4);
    expect(data.array).toEqual([1, 2, 3, 4]);
  });
  
  it('prevents duplicate when adding', () => {
    const data = new Set([1, 2, 3]);
    data.add(1);
    expect(data.array).toEqual([1, 2, 3]);
  });
  
  it('removes a value from a set', () => {
    const data = new Set([1, 2, 3]);
    data.remove(1);
    expect(data.array).toEqual([2, 3]);
  });
  
  it('checks if set has value', () => {
    const data = new Set([1, 2, 3]);
    const check = data.has(1);
    expect(check).toEqual(true);
  });

  // it('returns intersections', () => {
  //   const set1 = new Set([1, 2, 3]);
  //   const set2 = new Set([2, 3, 4]);
  //   const result = set1.intersection(set2);
  //   expect(result).toEqual([2, 3]);
  // });

  it('intersection instance method returns the intersection', () => {
    const set1 = new Set([1, 2, 3]);
    const set2 = new Set([1, 2, 4]);
    const intersection = set1.intersection(set2);
    expect(intersection.array).toEqual([1, 2]);
  });

});