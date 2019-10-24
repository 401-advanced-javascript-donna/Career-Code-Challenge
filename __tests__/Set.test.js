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
    const data = new Set([4, 5, 6]);
    data.remove(4);
    expect(data.array).toEqual([5, 6]);
  });
  
  it('checks if set has value', () => {
    const data = new Set([1, 2, 3]);
    const check = data.has(1);
    console.log(check);
    expect(check).toEqual(true);
  });
});