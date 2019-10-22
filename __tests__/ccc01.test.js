const addDate = require('../career-week-challenges/ccc01');

describe('add a date', () => {
  it('adds seconds', () => {
    const date = Date.now();
    const result = addDate(date, '10s');
    expect(result).toBe(date + 10000);
  });

  it('adds minutes', () => {
    const date = Date.now();
    const result = addDate(date, '10m');
    expect(result).toBe(date + 600000);
  });

  it('adds hours', () => {
    const date = Date.now();
    const result = addDate(date, '10h');
    expect(result).toBe(date + 36000000);
  });

  it('adds days', () => {
    const date = Date.now();
    const result = addDate(date, '10d');
    expect(result).toBe(date + 864000000);
  });
  
  it('adds weeks', () => {
    const date = Date.now();
    const result = addDate(date, '10w');
    expect(result).toBe(date + 6048000000);
  });

  it('adds months', () => {
    const date = Date.now();
    const result = addDate(date, '10M');
    expect(result).toBe(date + 184101120000);
  });

  it('adds years', () => {
    const date = Date.now();
    const result = addDate(date, '10y');
    expect(result).toBe(date + 2209213440000);
  });
});