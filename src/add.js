// @flow
type Input = mixed;
type Output = number | boolean;

function add(a: Input, b: Input): Output {
  return Number(a) + Number(b);
}

export default add;
