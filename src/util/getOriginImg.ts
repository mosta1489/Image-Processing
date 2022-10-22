import { promises as fs } from "fs";

export async function getOriginImg(
  imageName: string
): Promise<Buffer | undefined> {
  try {
    const image = await fs.readFile(`./images/${imageName}.jpg`);
    return image;
  } catch (error) {
    return undefined;
  }
}
