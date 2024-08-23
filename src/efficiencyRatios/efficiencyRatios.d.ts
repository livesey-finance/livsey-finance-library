// efficiencyRatios.d.ts

import Big from 'big.js';
import { createFunction } from "../functions/functions.js";

// Earnings Per Share (EPS)
export function calculateEPS(
    netIncome: number | Big,
    preferredDividends: number | Big,
    sharesOutstanding: number | Big
): number;

// Return on Assets (ROA)
export const calculateROA: (numerator: number | Big, denominator: number | Big) => number;

// Return on Equity (ROE)
export const calculateROE: (numerator: number | Big, denominator: number | Big) => number;

// Return on Investment (ROI)
export function calculateROI(
    currentValue: number | Big,
    cost: number | Big
): number;
