// otherRatios.d.ts

import Big from 'big.js';
import { createFunction } from "../functions/functions.js";

export const calculateEVtoEBITDA: (numerator: number | Big, denominator: number | Big) => number;
export function calculateEV(marketCap: number | Big, totalDebt: number | Big, cash: number | Big): number;
export const calculateEVCFO: (numerator: number | Big, denominator: number | Big) => number;
export const calculateEVFCFF: (numerator: number | Big, denominator: number | Big) => number;
