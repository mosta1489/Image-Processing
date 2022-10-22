import sharp from "sharp";
import { promises as fs } from "fs";

export const resizeImage = async (
  filename: string,
  image: Buffer,
  width: number,
  height: number
): Promise<string> => {
  const newImagePath = `./resized/${filename}_${width}_${height}.jpg`;
  try {
    await fs.readFile(newImagePath);
    return newImagePath;
  } catch (error) {
    const newImg = await sharp(image).resize(width, height).toBuffer();
    await fs.writeFile(newImagePath, newImg);
  }

  return newImagePath;
};

export default resizeImage;

// (async () => {
//   const filename = "fjord";
//   const width = 200;
//   const height = 200;
//   const x = await fs.readFile(`./resized/${filename}_${width}_${height}.jpg`);
//   console.log(x);
// })();
