import {createFunction} from "../functions/functions.js"

export const calculateEVtoEBITDA = createFunction("EBITDA cannot be zero, as it would cause division by zero.");

export function calculateEV(marketCap, totalDebt, cash) {
    const marketCapBig = new Big(marketCap);
    const totalDebtBig = new Big(totalDebt);
    const cashBig = new Big(cash);

    const ev = marketCapBig.plus(totalDebtBig).minus(cashBig);
    return parseFloat(ev.toString());
}

export const calculateEVCFO = createFunction("Cash flow from operations cannot be zero, as it would cause division by zero.");

export const calculateEVFCFF = createFunction("Free cash flow to firm cannot be zero, as it would cause division by zero.");