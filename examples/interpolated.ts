import { config } from "snackables";

process.env.MESSAGE = "hello";

config({ path: "interpolate" });

/* eslint-disable-next-line */
console.log(`\x1b[32mprocess.env.MESSAGE: ${process.env.MESSAGE}\x1b[0m`);
/* eslint-disable-next-line */
console.log(`\x1b[32mprocess.env.ENVIRO: ${process.env.ENVIRO}\x1b[0m`);
