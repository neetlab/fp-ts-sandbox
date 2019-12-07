import * as R from "fp-ts/lib/Record";
import { isSome } from "fp-ts/lib/Option";
import { log } from "fp-ts/lib/Console";
import { pipe } from "fp-ts/lib/pipeable";

type User = {
  name: string;
  birthDay: Date;
};

const usersSeed: Record<string, User> = {};

const users = pipe(
  usersSeed,
  R.insertAt("123", { name: "John", birthDay: new Date("2018-09-04") }),
  R.insertAt("456", { name: "Alice", birthDay: new Date("2018-12-04") }),
);

const user123 = R.lookup("123", users);
if (isSome(user123)) log(user123.value.name)();
