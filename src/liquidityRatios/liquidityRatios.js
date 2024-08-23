import { createFunction } from '../functions/functions.js';
import Big from 'big.js';

export const calculateCurrentRatio = createFunction('Current liabilities cannot be zero, as it would cause division by zero.');

export function calculateQuickRatio(cash, marketableSecurities, accountsReceivable, currentLiabilities) {
  if (currentLiabilities === 0) {
    throw LiveseyFinanceError.ZeroDivisionError('Current liabilities cannot be zero, as it would cause division by zero.');
  }
  const cashBig = new Big(cash);
  const marketableSecuritiesBig = new Big(marketableSecurities);
  const accountsReceivableBig = new Big(accountsReceivable);
  const currentLiabilitiesBig = new Big(currentLiabilities);

  const quickRatio = cashBig.plus(marketableSecuritiesBig).plus(accountsReceivableBig).div(currentLiabilitiesBig);
  return parseFloat(quickRatio.toString());
}

export const calculateCashRatio = createFunction('Current liabilities cannot be zero, as it would cause division by zero.');

export const calculateNWCPercentageRevenue = createFunction('Revenue cannot be zero, as it would cause division by zero.');


export function calculateNetDebt(totalDebt, cash) {
  const totalDebtBig = new Big(totalDebt);
  const cashBig = new Big(cash);

  const netDebt = totalDebtBig.minus(cashBig);
  return parseFloat(netDebt.toString());
}
