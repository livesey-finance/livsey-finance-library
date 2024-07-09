import Big from 'big.js';
import { LiveseyFinanceError } from '../errors/errors.ts';

// P/E Ratio
export function calculatePE(price: number, eps: number): number {
    if (eps === 0) {
        throw LiveseyFinanceError.ZeroDivisionError("EPS cannot be zero, as it would cause division by zero.");
    }
    const priceBig = new Big(price);
    const epsBig = new Big(eps);

    const peRatio = priceBig.div(epsBig);
    return parseFloat(peRatio.toString());
}

// Forward P/E Ratio
export function calculateForwardPE(price: number, forwardEps: number): number {
    if (forwardEps === 0) {
        throw LiveseyFinanceError.ZeroDivisionError("Forward EPS cannot be zero, as it would cause division by zero.");
    }
    const priceBig = new Big(price);
    const forwardEpsBig = new Big(forwardEps);

    const forwardPeRatio = priceBig.div(forwardEpsBig);
    return parseFloat(forwardPeRatio.toString());
}

// PEG Ratio
export function calculatePEG(pe: number, growthRate: number): number {
    if (growthRate === 0) {
        throw LiveseyFinanceError.ZeroDivisionError("Growth rate cannot be zero, as it would cause division by zero.");
    }
    const peBig = new Big(pe);
    const growthRateBig = new Big(growthRate);

    const pegRatio = peBig.div(growthRateBig);
    return parseFloat(pegRatio.toString());
}

// P/S Ratio
export function calculatePS(marketCap: number, revenue: number): number {
    if (revenue === 0) {
        throw LiveseyFinanceError.ZeroDivisionError("Revenue cannot be zero, as it would cause division by zero.");
    }
    const marketCapBig = new Big(marketCap);
    const revenueBig = new Big(revenue);

    const psRatio = marketCapBig.div(revenueBig);
    return parseFloat(psRatio.toString());
}

// P/B Ratio
export function calculatePB(price: number, bookValuePerShare: number): number {
    if (bookValuePerShare === 0) {
        throw LiveseyFinanceError.ZeroDivisionError("Book value per share cannot be zero, as it would cause division by zero.");
    }
    const priceBig = new Big(price);
    const bookValuePerShareBig = new Big(bookValuePerShare);

    const pbRatio = priceBig.div(bookValuePerShareBig);
    return parseFloat(pbRatio.toString());
}

// P/C Ratio
export function calculatePC(price: number, cashFlowPerShare: number): number {
    if (cashFlowPerShare === 0) {
        throw LiveseyFinanceError.ZeroDivisionError("Cash flow per share cannot be zero, as it would cause division by zero.");
    }
    const priceBig = new Big(price);
    const cashFlowPerShareBig = new Big(cashFlowPerShare);

    const pcRatio = priceBig.div(cashFlowPerShareBig);
    return parseFloat(pcRatio.toString());
}

// P/FCF Ratio
export function calculatePFCF(price: number, freeCashFlowPerShare: number): number {
    if (freeCashFlowPerShare === 0) {
        throw LiveseyFinanceError.ZeroDivisionError("Free cash flow per share cannot be zero, as it would cause division by zero.");
    }
    const priceBig = new Big(price);
    const freeCashFlowPerShareBig = new Big(freeCashFlowPerShare);

    const pfcfRatio = priceBig.div(freeCashFlowPerShareBig);
    return parseFloat(pfcfRatio.toString());
}

// CAPE Ratio
export function calculateCAPE(price: number, avgEarnings10Years: number): number {
    if (avgEarnings10Years === 0) {
        throw LiveseyFinanceError.ZeroDivisionError("Average earnings over 10 years cannot be zero, as it would cause division by zero.");
    }
    const priceBig = new Big(price);
    const avgEarnings10YearsBig = new Big(avgEarnings10Years);

    const capeRatio = priceBig.div(avgEarnings10YearsBig);
    return parseFloat(capeRatio.toString());
}

// CAPE ROE
export function calculateCAPEROE(avgEarnings10Years: number, equity: number): number {
    if (equity === 0) {
        throw LiveseyFinanceError.ZeroDivisionError("Equity cannot be zero, as it would cause division by zero.");
    }
    const avgEarnings10YearsBig = new Big(avgEarnings10Years);
    const equityBig = new Big(equity);

    const capeROE = avgEarnings10YearsBig.div(equityBig);
    return parseFloat(capeROE.toString());
}

// E/P Ratio
export function calculateEP(eps: number, price: number): number {
    if (price === 0) {
        throw LiveseyFinanceError.ZeroDivisionError("Price cannot be zero, as it would cause division by zero.");
    }
    const epsBig = new Big(eps);
    const priceBig = new Big(price);

    const epRatio = epsBig.div(priceBig);
    return parseFloat(epRatio.toString());
}