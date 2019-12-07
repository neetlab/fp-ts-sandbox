import * as A from 'fp-ts/lib/Array';
import { pipe } from 'fp-ts/lib/pipeable';
import { log } from 'fp-ts/lib/Console';

const times2 = (nums: number[]) => A.map<number, number>(x => x * 2)(nums);
const plus3 = (nums: number[]) => A.map<number, number>(x => x + 3)(nums);
const even = (nums: number[]) => A.filter<number, number>((x): x is number => x % 2 === 0)(nums);

const res = pipe(
  A.range(1, 10),
  times2,
  plus3,
  array => A.cons(0, array),
  array => A.snoc(array, 100),
);

log(res)();
