// @flow
import add from '../add';

describe('add', () => {
  it('should add together two numbers', () => {
    expect(add(1, 2)).toEqual(3);
  });

  it('coerces its arguments to numbers', () => {
    expect(add('1', '2')).toEqual(3);
    expect(add(1, '2')).toEqual(3);
    expect(add(true, false)).toEqual(1);
    expect(add(null, null)).toEqual(0);
    expect(add(undefined, undefined)).toEqual(NaN);
    expect(add(new Date(1), new Date(2))).toEqual(3);
  });
});
