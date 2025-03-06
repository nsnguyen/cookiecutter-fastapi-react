/**
 * Format a number as a percentage
 * @param {number} value - The value to format
 * @param {number} decimals - Number of decimal places
 * @returns {string} - Formatted percentage
 */
export const formatPercentage = (value, decimals = 2) => {
  return `${(value * 100).toFixed(decimals)}%`;
};

/**
 * Format a number with commas for thousands
 * @param {number} value - The value to format
 * @returns {string} - Formatted number
 */
export const formatNumber = (value) => {
  return value.toLocaleString();
};
