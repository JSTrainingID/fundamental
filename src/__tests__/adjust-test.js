// @flow
import adjust from '../adjust';

describe('adjust', () => {
  let add = (a) => (b) => a + b;

  it('applies the given function to the value at the given index of the supplied array', () => {
    expect(adjust(add(1), 2, [0, 1, 2, 3])).toEqual([0, 1, 3, 3]);
  });
});
