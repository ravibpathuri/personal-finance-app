import numeral from "numeral";

const formulajs = require("@formulajs/formulajs");

/**
 *
 * @param value
 * @returns
 */
export const formatCurrency = (value: any) => {
  return `₹ ${numeral(value).format("0,0.00")}`;
};

/**
 *
 */
export const TAX_LIMIT = 100000;

/**
 *
 * @param months
 * @param investedAmount
 * @param futureValue
 * @returns
 */
export const getRate = (
  months: any,
  investedAmount: any,
  futureValue: any,
  isSIP: boolean
) => {
  const rate = formulajs.RATE(
    months,
    isSIP ? -Math.abs(investedAmount) : 0,
    isSIP ? 0 : -Math.abs(investedAmount),
    futureValue,
    isSIP ? 1 : 0,
    0.1
  );

  return formulajs.ROUND(rate * 1200, 2);
};

/**
 *
 * @param months
 * @param investedAmount
 * @param rate
 * @param isSIP
 * @returns
 */
export const getFutureValue = (
  months: any,
  investedAmount: any,
  rate: any,
  isSIP: boolean
): any => {
  const fv = formulajs.FV(
    rate / 1200,
    months,
    isSIP ? -Math.abs(investedAmount) : 0,
    isSIP ? 0 : -Math.abs(investedAmount),
    isSIP ? 1 : 0
  );

  return formulajs.ROUND(fv, 2);
};
