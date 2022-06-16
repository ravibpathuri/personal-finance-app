import "@testing-library/jest-dom";
import { getFutureValue, getRate } from "..";

describe("Utility Tests", () => {
  it("should return correct result for FV SIP ", () => {
    // arrange
    const rate = "25.04";
    const investedAmount = "15000";
    const months = "60";
    const isSIP = true;

    const expectedResult = 1799811.78;

    // act
    const fv = getFutureValue(months, investedAmount, rate, isSIP);

    // assert
    expect(fv).toBe(expectedResult);
  });

  it("should return correct result for FV Lumpsum ", () => {
    // arrange
    const rate = "25.04";
    const investedAmount = "900000";
    const months = "60";
    const isSIP = false;

    const expectedResult = 3107305.24;

    // act
    const fv = getFutureValue(months, investedAmount, rate, isSIP);

    // assert
    expect(fv).toBe(expectedResult);
  });
});
