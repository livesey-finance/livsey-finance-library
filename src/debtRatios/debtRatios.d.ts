// debtRatios.d.ts

import Big from 'big.js';
import { createFunction } from "../functions/functions.js";

// Debt to Equity Ratio
export const calculateDebtEquity: (numerator: number | Big, denominator: number | Big) => number;

// Long-Term Debt to Equity Ratio
export const calculateLTDebtEquity: (numerator: number | Big, denominator: number | Big) => number;
