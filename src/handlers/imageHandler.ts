import { Request, Response, NextFunction } from "express";

import { resizeImage } from "../util/sharp";
import { getOriginImg } from "../util/getOriginImg";
import path from "path";

export const imageHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const filename = req.query.filename;

  if (!filename || !req.query.width || !req.query.height) {
    return next("missing values. filename , width and height are required");
  }
  const allNames = ["fjord", "encenadaport", "palmtunnel", " santamonica"];
  if (typeof filename !== "string" || !allNames.includes(filename)) {
    return next(`Invalid input. filename must be from these names
    [ fjord, encenadaport, palmtunnel, santamonica ] `);
  }

  const width = Number(req.query.width);
  const height = Number(req.query.height);
  if (width < 1 || height < 1) {
    return next("Invalid input. width and height must be a positive number ");
  }

  try {
    const image = await getOriginImg(filename);
    if (!image) {
      return next("error");
    }
    const newImagePath = await resizeImage(
      String(filename),
      image,
      width,
      height
    );

    res.status(200).sendFile(path.join(__dirname, "../../", newImagePath));
  } catch (error) {
    return next(error);
  }
};
