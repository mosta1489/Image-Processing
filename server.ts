import express from "express";
import asyncHandler from "express-async-handler";
import { requestLoggerMiddleware } from "./middlewares/loggerMiddleware";
import { errHanler } from "./middlewares/errorMiddleware";
import { imageHandler } from "./handlers/imageHandler";
const app = express();

app.use(requestLoggerMiddleware);

app.get("/api", asyncHandler(imageHandler));

app.use(errHanler);

app.listen(3000, () => {
  console.log("server listening ...");
});

export default app;
