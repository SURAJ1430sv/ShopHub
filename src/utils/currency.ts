// Currency conversion utility functions
export const USD_TO_INR_RATE = 83; // Current approximate exchange rate

/**
 * Convert USD to INR
 * @param usdAmount - Amount in USD
 * @returns Amount in INR as a formatted string
 */
export const usdToInr = (usdAmount: number): string => {
  return `₹${(usdAmount * USD_TO_INR_RATE).toFixed(0)}`;
};

/**
 * Convert USD to INR without symbol
 * @param usdAmount - Amount in USD
 * @returns Amount in INR as a number
 */
export const usdToInrNumber = (usdAmount: number): number => {
  return usdAmount * USD_TO_INR_RATE;
};

/**
 * Format INR amount with symbol
 * @param inrAmount - Amount in INR
 * @returns Formatted INR amount
 */
export const formatInr = (inrAmount: number): string => {
  return `₹${inrAmount.toFixed(0)}`;
};

/**
 * Get free shipping threshold in INR
 */
export const FREE_SHIPPING_THRESHOLD_INR = 4000; // ₹4000

/**
 * Check if order qualifies for free shipping
 * @param usdAmount - Order total in USD
 * @returns Boolean indicating if free shipping applies
 */
export const qualifiesForFreeShipping = (usdAmount: number): boolean => {
  return usdAmount >= (FREE_SHIPPING_THRESHOLD_INR / USD_TO_INR_RATE);
};
