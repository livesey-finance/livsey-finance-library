import Big from 'big.js';
import { LiveseyFinanceError } from '../errors/errors.ts';

// Debt/Equity (D/E)
// D/E = Total Debt / Equity
export function calculateDebtEquity(totalDebt: number, equity: number): number {
    if (equity === 0) {
        throw LiveseyFinanceError.ZeroDivisionError("Equity cannot be zero, as it would cause division by zero.");
    }
    const totalDebtBig = new Big(totalDebt);
    const equityBig = new Big(equity);

    const debtEquityRatio = totalDebtBig.div(equityBig);
    return parseFloat(debtEquityRatio.toString());
}

// Long-term Debt to Equity Ratio
export function calculateLTDebtEquity(longTermDebt: number, equity: number): number {
    if (equity === 0) {
        throw LiveseyFinanceError.ZeroDivisionError("Equity cannot be zero, as it would cause division by zero.");
    }

    const longTermDebtBig = new Big(longTermDebt);
    const equityBig = new Big(equity);

    const debtEquityRatio = longTermDebtBig.div(equityBig);
    return parseFloat(debtEquityRatio.toString());
}