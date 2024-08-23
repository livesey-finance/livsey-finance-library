// valuationRatios.d.ts

import Big from 'big.js';
import { createFunction } from "../functions/functions.js";

export const calculatePE: (numerator: number | Big, denominator: number | Big) => number;
export const calculateForwardPE: (numerator: number | Big, denominator: number | Big) => number;
export const calculatePEG: (numerator: number | Big, denominator: number | Big) => number;
export const calculatePS: (numerator: number | Big, denominator: number | Big) => number;
export const calculatePB: (numerator: number | Big, denominator: number | Big) => number;
export const calculatePC: (numerator: number | Big, denominator: number | Big) => number;
export const calculatePFCF: (numerator: number | Big, denominator: number | Big) => number;
export const calculateCAPE: (numerator: number | Big, denominator: number | Big) => number;

  