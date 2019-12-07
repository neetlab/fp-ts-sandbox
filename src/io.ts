import fs from "fs";
import { IO, io } from "fp-ts/lib/IO";
import { log } from "fp-ts/lib/Console";
import { pipe } from 'fp-ts/lib/pipeable';

const write: IO<void> = () =>
  fs.writeFileSync("./data.txt", "hello", { encoding: "utf-8" });

const read: IO<string> = () =>
  fs.readFileSync("./data.txt", { encoding: "utf-8" });

const main: IO<void> = () => pipe(
  write(),
  io.chain(read, log),
);

main();
