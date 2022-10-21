import { ErrorRequestHandler } from "express";

export const errHanler: ErrorRequestHandler = (err, _, res, __) => {
  console.log("Uncaught exception", err);
  if (err) {
    res.status(500).send(`Oops, ${err}`);
  }
  res.status(500).send(`Oops, an unexpected error occured, please try again`);
};
