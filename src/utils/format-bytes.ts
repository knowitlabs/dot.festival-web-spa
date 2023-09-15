/**
 * Format a number of bytes into a human-readable string with optional decimal places.
 *
 * @param {number} bytes - The number of bytes to format.
 * @param {number} decimals - The number of decimal places to round to (default is 2).
 * @param {number} format - The formatting base (e.g., 1000 for SI units or 1024 for binary units, default is 1000).
 * @returns {string} - The formatted string with appropriate unit (e.g., "2.54 KB").
 *
 * @example
 * const fileSize = formatBytes(1024); // "1.00 KB"
 */
export const formatBytes = (
  bytes: number,
  decimals = 2,
  format = 1000
): string => {
  if (!+bytes) return `0 ${format !== 8 ? 'bytes' : 'bits'}`;

  if (format == 8) {
    bytes = bytes * 8;
  }

  const dm = decimals < 0 ? 0 : decimals;
  const sizes = {
    '8': ['bits', 'kb', 'Mb', 'Gb', 'Tb', 'Pb', 'Eb', 'Zb', 'Yb'],
    '1000': ['bytes', 'KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'],
    '1024': ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
  };
  const i = Math.floor(Math.log(bytes) / Math.log(format));

  return `${parseFloat((bytes / Math.pow(format, i)).toFixed(dm))} ${
    sizes[format][i]
  }`;
};
