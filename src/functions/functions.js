import Big from 'big.js';
import { LiveseyFinanceError } from '../errors/errors.js';

export const calculateRatio = (error, ...args) => {
  const bigArgs = args.map((arg) => {
    try {
      return new Big(arg);
    } catch (e) {
      throw new LiveseyFinanceError.InvalidNumberError(`Invalid number provided: ${arg}`);
    }
  });

  const denominator = bigArgs.at(-1);

  if (denominator.eq(0)) {
    throw new LiveseyFinanceError.ZeroDivisionError(error);
  }

  const numerator = bigArgs.slice(0, -1).reduce((acc, current) => acc.plus(current), new Big(0));

  const ratio = numerator.div(denominator);
  return parseFloat(ratio.toString());
};

export const createFunction = (errorMessage) => (numerator, denominator) => calculateRatio(errorMessage, numerator, denominator);
