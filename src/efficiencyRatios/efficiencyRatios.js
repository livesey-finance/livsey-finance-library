import { createFunction } from '../functions/functions.js';
import Big from 'big.js';

export function calculateEPS(netIncome, preferredDividends, sharesOutstanding) {
  if (sharesOutstanding === 0) {
    throw LiveseyFinanceError.ZeroDivisionError('Shares outstanding cannot be zero, as it would cause division by zero.');
  }
  const netIncomeBig = new Big(netIncome);
  const preferredDividendsBig = new Big(preferredDividends);
  const sharesOutstandingBig = new Big(sharesOutstanding);

  const eps = netIncomeBig.minus(preferredDividendsBig).div(sharesOutstandingBig);
  return parseFloat(eps.toString());
}

export const calculateROA = createFunction('Total assets cannot be zero, as it would cause division by zero.');

export const calculateROE = createFunction('Equity cannot be zero, as it would cause division by zero.');

export function calculateROI(currentValue, cost) {
  if (cost === 0) {
    throw new Error('Cost cannot be zero, as it would cause division by zero.');
  }
  const currentValueBig = new Big(currentValue);
  const costBig = new Big(cost);

  const roi = currentValueBig.minus(costBig).div(costBig);
  return parseFloat(roi.toString());
}
