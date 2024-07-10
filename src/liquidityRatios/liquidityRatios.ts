import Big from 'big.js';
import { LiveseyFinanceError } from '../errors/errors';

// Current Ratio
export function calculateCurrentRatio(currentAssets: number, currentLiabilities: number): number {
    if (currentLiabilities === 0) {
        throw LiveseyFinanceError.ZeroDivisionError("Current liabilities cannot be zero, as it would cause division by zero.");
    }
    const currentAssetsBig = new Big(currentAssets);
    const currentLiabilitiesBig = new Big(currentLiabilities);

    const currentRatio = currentAssetsBig.div(currentLiabilitiesBig);
    return parseFloat(currentRatio.toString());
}

// Quick Ratio
export function calculateQuickRatio(cash: number, marketableSecurities: number, accountsReceivable: number, currentLiabilities: number): number {
    if (currentLiabilities === 0) {
        throw LiveseyFinanceError.ZeroDivisionError("Current liabilities cannot be zero, as it would cause division by zero.");
    }
    const cashBig = new Big(cash);
    const marketableSecuritiesBig = new Big(marketableSecurities);
    const accountsReceivableBig = new Big(accountsReceivable);
    const currentLiabilitiesBig = new Big(currentLiabilities);

    const quickRatio = cashBig.plus(marketableSecuritiesBig).plus(accountsReceivableBig).div(currentLiabilitiesBig);
    return parseFloat(quickRatio.toString());
}

// Cash Ratio
export function calculateCashRatio(cash: number, currentLiabilities: number): number {
    if (currentLiabilities === 0) {
        throw LiveseyFinanceError.ZeroDivisionError("Current liabilities cannot be zero, as it would cause division by zero.");
    }
    const cashBig = new Big(cash);
    const currentLiabilitiesBig = new Big(currentLiabilities);

    const cashRatio = cashBig.div(currentLiabilitiesBig);
    return parseFloat(cashRatio.toString());
}

// Net Working Capital (NWC) % Revenue
export function calculateNWCPercentageRevenue(nwc: number, revenue: number): number {
    if (revenue === 0) {
        throw LiveseyFinanceError.ZeroDivisionError("Revenue cannot be zero, as it would cause division by zero.");
    }
    const nwcBig = new Big(nwc);
    const revenueBig = new Big(revenue);

    const nwcPercentageRevenue = nwcBig.div(revenueBig);
    return parseFloat(nwcPercentageRevenue.toString());
}

// Net Debt
export function calculateNetDebt(totalDebt: number, cash: number): number {
    const totalDebtBig = new Big(totalDebt);
    const cashBig = new Big(cash);

    const netDebt = totalDebtBig.minus(cashBig);
    return parseFloat(netDebt.toString());
}
