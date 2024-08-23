declare module 'functions' {
    import Big from 'big.js';
    import { LiveseyFinanceError } from '../errors/errors.js';
  
    /**
     * Helper function to calculate financial ratios
     * @param numerator - The numerator value
     * @param denominator - The denominator value
     * @param error - The error message if denominator is zero
     * @returns The calculated ratio as a number
     */
    export function calculateRatio(numerator: number, denominator: number, error: string): number;
  
    /**
     * Factory function to create specific financial ratio calculators
     * @param errorMessage - The error message to display when the denominator is zero
     * @returns A function that calculates the ratio
     */
    export function createFunction(errorMessage: string): (numerator: number, denominator: number) => number;
  }
  