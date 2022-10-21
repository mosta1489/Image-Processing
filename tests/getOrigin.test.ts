import "jasmine";
import { getOriginImg } from "../util/getOriginImg";

describe("test getOriginImg function", () => {
  it("should return original image ", async () => {
    const filename = "fjord";
    const image = await getOriginImg(filename);
    expect(typeof image).toEqual("object");
  });

  it("should return undefined", async () => {
    const filename = "notFound";
    const image = await getOriginImg(filename);
    expect(typeof image).toEqual("undefined");
  });
});
