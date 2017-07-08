// @flow
import all from '../all';

describe('all', () => {
  let even = (n: number) => n % 2 === 0;
  let T = () => true;
  let isFalse = (x: boolean) => x === false;

  it('should return true if all elements satisfy the predicate or the first argument of the function', () => {
    expect(all(even, [2, 4, 6, 8])).toBe(true);
    expect(all(isFalse, [false, false, false])).toBe(true);
    expect(all(T, [])).toBe(true);
  });

  it(`should return false if any element fails to satisfy the predicate`, () => {
    expect(all(even, [2, 4, 6, 8, 10])).toBe(true);
    expect(all(even, [2, 4, 6, 8, 11])).toBe(false);
  });
});
