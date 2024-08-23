// liquidityRatios.d.ts

import Big from 'big.js';
import { createFunction } from "../functions/functions.js";

// Current Ratio
export const calculateCurrentRatio: (numerator: number | Big, denominator: number | Big) => number;

// Quick Ratio
export function calculateQuickRatio(
    cash: number | Big,
    marketableSecurities: number | Big,
    accountsReceivable: number | Big,
    currentLiabilities: number | Big
): number;

// Cash Ratio
export const calculateCashRatio: (numerator: number | Big, denominator: number | Big) => number;

// Net Working Capital (NWC) Percentage of Revenue
export const calculateNWCPercentageRevenue: (numerator: number | Big, denominator: number | Big) => number;

// Net Debt
export function calculateNetDebt(
    totalDebt: number | Big,
    cash: number | Big
): number;
