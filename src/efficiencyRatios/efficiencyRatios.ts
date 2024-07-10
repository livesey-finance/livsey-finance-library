import Big from 'big.js';
import { LiveseyFinanceError } from '../errors/errors';

// EPS (ttm)
export function calculateEPS(netIncome: number, preferredDividends: number, sharesOutstanding: number): number {
    if (sharesOutstanding === 0) {
        throw LiveseyFinanceError.ZeroDivisionError("Shares outstanding cannot be zero, as it would cause division by zero.");
    }
    const netIncomeBig = new Big(netIncome);
    const preferredDividendsBig = new Big(preferredDividends);
    const sharesOutstandingBig = new Big(sharesOutstanding);

    const eps = netIncomeBig.minus(preferredDividendsBig).div(sharesOutstandingBig);
    return parseFloat(eps.toString());
}

// ROA
export function calculateROA(netIncome: number, totalAssets: number): number {
    if (totalAssets === 0) {
        throw LiveseyFinanceError.ZeroDivisionError("Total assets cannot be zero, as it would cause division by zero.");
    }
    const netIncomeBig = new Big(netIncome);
    const totalAssetsBig = new Big(totalAssets);

    const roa = netIncomeBig.div(totalAssetsBig);
    return parseFloat(roa.toString());
}


// ROE
export function calculateROE(netIncome: number, equity: number) {
    if (equity === 0) {
        throw LiveseyFinanceError.ZeroDivisionError("Equity cannot be zero, as it would cause division by zero.");
    }
    const netIncomeBig = new Big(netIncome);
    const equityBig = new Big(equity);

    const roe = netIncomeBig.div(equityBig);
    return parseFloat(roe.toString());
}

// ROI
export function calculateROI(currentValue: number, cost: number): number {
    if (cost === 0) {
        throw new Error("Cost cannot be zero, as it would cause division by zero.");
    }
    const currentValueBig = new Big(currentValue);
    const costBig = new Big(cost);

    const roi = currentValueBig.minus(costBig).div(costBig);
    return parseFloat(roi.toString());
}