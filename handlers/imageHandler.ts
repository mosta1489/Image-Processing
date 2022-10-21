import { RequestHandler } from "express";
// import { promises as fs } from "fs";
import {
  imageHandlerRequest as IReq,
  // imageHandlerResponse as IRes,
} from "../api";
import { resizeImage } from "../util/sharp";
import { getOriginImg } from "../util/getOriginImg";
import path from "path";

export const imageHandler: RequestHandler<IReq, any> = async (
  req,
  res,
  next
) => {
  const { filename, width, height } = req.query;

  if (!filename || !width || !height || typeof filename != "string") {
    return next("error");
  }

  try {
    const image = await getOriginImg(filename);
    if (!image) {
      return next("error");
    }
    const newImagePath = await resizeImage(
      String(filename),
      image,
      +width,
      +height
    );

    res.status(200).sendFile(path.join(__dirname, "../", newImagePath));
  } catch (error) {
    return next(error);
  }
};
