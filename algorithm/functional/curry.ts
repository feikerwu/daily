/**
 * add(1)(2)(3) = 6
 * add(1)(2)(3)(4) = 10
 */

interface omageAdder {
  (x: number): omageAdder;
}

function add(num: number): omageAdder {
  let nums = [num];

  let f: omageAdder = x => {
    nums.push(x);
    return f;
  };

  f.valueOf = () => nums.reduce((acc, cur) => acc + cur, 0);

  return f;
}

console.log(add(1)(2)(3));
