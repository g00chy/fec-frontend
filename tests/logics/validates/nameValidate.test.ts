import { NameValidate } from "src/logics/validates";

describe("Normal system", () => {
  const validate = NameValidate.validate;

  it("pass value", () => {
    const value = "testcase";
    expect(validate(value).value).toEqual(value);
  });

  describe("validate", () => {
    it("success", () => {
      const value = "testcase";
      const result = validate(value);
      expect(result.isRegular).toBeTruthy();
      expect(result).toHaveProperty("failedReason", undefined);
    });

    describe("failed", () => {
      it("not formatted", () => {
        const value = "test@case";
        const result = validate(value);
        expect(result.isRegular).toBeFalsy();
        expect(result.failedReason).toEqual("not formatted");
      });

      it("too long", () => {
        const value = [...Array(256).keys()].map(() => "a").join("");
        const result = validate(value);
        expect(result.isRegular).toBeFalsy();
        expect(result.failedReason).toEqual("too long");
      });

      it("blank", () => {
        const value = "";
        const result = validate(value);
        expect(result.isRegular).toBeFalsy();
        expect(result.failedReason).toEqual("blank");
      });
    });
  });
});
