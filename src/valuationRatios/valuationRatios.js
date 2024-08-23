import {createFunction} from "../functions/functions.js"

export const calculatePE = createFunction("EPS cannot be zero, as it would cause division by zero.");

export const calculateForwardPE = createFunction("Forward EPS cannot be zero, as it would cause division by zero.");

export const calculatePEG = createFunction("Growth rate cannot be zero, as it would cause division by zero.");

export const calculatePS = createFunction("Revenue cannot be zero, as it would cause division by zero.");

export const calculatePB = createFunction("Book value per share cannot be zero, as it would cause division by zero.");

export const calculatePC = createFunction("Cash flow per share cannot be zero, as it would cause division by zero.");

export const calculatePFCF = createFunction("Free cash flow per share cannot be zero, as it would cause division by zero.");

export const calculateCAPE = createFunction("Average earnings over 10 years cannot be zero, as it would cause division by zero.");
