import "jasmine";
import resizeImage from "../util/sharp";
import { getOriginImg } from "../util/getOriginImg";

describe("test resizeImage function", () => {
  it("should return path of new image after resizeing", async () => {
    const filename = "fjord";
    const image = await getOriginImg(filename);
    if (!image) {
      return;
    }
    const path = await resizeImage(filename, image, 50, 50);

    expect(path).toEqual(`./resized/${filename}_50_50.jpg`);
  });
});
