import numeral from "numeral";

export const formatCurrency = (value: any) => {
  return `₹ ${numeral(value).format("0,0.00")}`;
};

export const TAX_LIMIT = 100000;
