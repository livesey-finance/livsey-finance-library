import Big from 'big.js';
import { LiveseyFinanceError } from '../errors/errors.ts';

// Enterprise Value/EBITDA
// EV/EBITDA = EV / EBITDA
export function calculateEVtoEBITDA(ev: number, ebitda: number): number {
    if (ebitda === 0) {
        throw LiveseyFinanceError.ZeroDivisionError("EBITDA cannot be zero, as it would cause division by zero.");
    }
    const evBig = new Big(ev);
    const ebitdaBig = new Big(ebitda);

    const evToEbitdaRatio = evBig.div(ebitdaBig);
    return parseFloat(evToEbitdaRatio.toString());
}

// Enterprise Value (EV)
// EV = Market Cap + Total Debt - Cash
export function calculateEV(marketCap: number, totalDebt: number, cash: number): number {
    const marketCapBig = new Big(marketCap);
    const totalDebtBig = new Big(totalDebt);
    const cashBig = new Big(cash);

    const ev = marketCapBig.plus(totalDebtBig).minus(cashBig);
    return parseFloat(ev.toString());
}

// EV to CFO Ratio
export function calculateEVCFO(ev: number, cfo: number): number {
    if (cfo === 0) {
        throw LiveseyFinanceError.ZeroDivisionError("Cash flow from operations cannot be zero, as it would cause division by zero.");
    }
    const evBig = new Big(ev);
    const cfoBig = new Big(cfo);

    const evCfoRatio = evBig.div(cfoBig);
    return parseFloat(evCfoRatio.toString());
}

// EV to FCFF Ratio
export function calculateEVFCFF(ev: number, fcff: number): number {
    if (fcff === 0) {
        throw LiveseyFinanceError.ZeroDivisionError("Free cash flow to firm cannot be zero, as it would cause division by zero.");
    }
    const evBig = new Big(ev);
    const fcffBig = new Big(fcff);

    const evFcffRatio = evBig.div(fcffBig);
    return parseFloat(evFcffRatio.toString());
}