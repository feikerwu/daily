/**
 * 手写一个call，bind, apply
 */

// @ts-ignore
Function.prototype.myCall = function(context: object, ...args: unknown[]) {
  context = context || window;
  const _callSymbol = Symbol();

  context[_callSymbol] = this;
  let res: unknown = context[_callSymbol](...args);
  context[_callSymbol] = null;
  return res;
};

// @ts-ignore
Function.prototype.myApply = function(context: object, args: unknown[]) {
  context = context || window;
  const _applySymbol = Symbol();
  context[_applySymbol] = this;
  const res: unknown = context[_applySymbol](...args);
  context[_applySymbol] = null;
  return res;
};

// @ts-ignore
Function.prototype.myBind = function(context: object, args: unknown[]) {
  context = context || window;
  const _bindSymbol = Symbol();
  context[_bindSymbol] = this;
  return (...args: unknown[]) => {
    const res = context[_bindSymbol](...args);
    return res;
  };
};

// @ts-ignore
const name = 'window';

function fn(...args) {
  console.log('args', ...args);
  console.log(this.name);
}

fn();
let obj = {
  name: 'xx'
};
// @ts-ignore
fn.myCall(obj, 'call', 1, 2);

// @ts-ignore
fn.myApply({ name: 'apply' }, ['apply', 1, 2]);

// @ts-ignore
let t = fn.myBind({ name: 'bind' });
t('1', '2');
