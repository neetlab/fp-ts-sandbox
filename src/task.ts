import { promises as fs } from "fs";
import { array } from "fp-ts/lib/Array";
import { IO } from "fp-ts/lib/IO";
import { log } from "fp-ts/lib/Console";
import { Task, task, taskSeq, fromIO } from "fp-ts/lib/Task";
import { pipe } from "fp-ts/lib/pipeable";

const write: Task<void> = () =>
  fs.writeFile("./data.txt", "hello", { encoding: "utf-8" });

const read: Task<string> = () =>
  fs.readFile("./data.txt", { encoding: "utf-8" });

const putStrLn = (a: string) => fromIO(log(a));

const main: IO<void> = () =>
  array.sequence(taskSeq)([write, task.chain(read, putStrLn)])();

main();
