/**
 * Calculate brightness based on the weighted W3C formula.
 * @see https://mixable.blog/black-or-white-text-on-a-colour-background/
 *
 * @param {number[] | string} rgb - Color as an RGB array [r, g, b] or a string in the format 'r,g,b'.
 * @returns {number} - Brightness value.
 *
 * @example
 * // Using an RGB array
 * const brightness = weightedW3C([255, 128, 64]);
 *
 * // Using a string
 * const brightness = weightedW3C('255,128,64');
 */
export const weightedW3C = (rgb: number[] | string): number => {
  if (typeof rgb === 'string') {
    rgb = rgb.split(',').map((a) => parseInt(a));
  }

  return rgb[0] * 0.299 + rgb[1] * 0.587 + rgb[2] * 0.114;
};

/**
 * Convert RGB color values to HSV (Hue, Saturation, Value) color space.
 *
 * @param {number} r - Red component (0-255).
 * @param {number} g - Green component (0-255).
 * @param {number} b - Blue component (0-255).
 * @returns {number[]} - HSV array [Hue (0-360), Saturation (0-1), Value (0-1)].
 *
 * @example
 * const hsvColor = rgb2hsv(255, 128, 64);
 */
export const rgb2hsv = (r: number, g: number, b: number): number[] => {
  const v = Math.max(r, g, b);
  const c = v - Math.min(r, g, b);
  const h =
    c && (v == r ? (g - b) / c : v == g ? 2 + (b - r) / c : 4 + (r - g) / c);

  return [60 * (h < 0 ? h + 6 : h), v && c / v, v];
};

/**
 * Convert HSV (Hue, Saturation, Value) color values to RGB color space.
 *
 * @param {number[]} hsv - HSV array [Hue (0-360), Saturation (0-1), Value (0-1)].
 * @returns {number[]} - RGB color values [Red (0-255), Green (0-255), Blue (0-255)].
 *
 * @example
 * const rgbColor = hsv2rgb([30, 1, 1]);
 */
export const hsv2rgb = (hsv: number[]): number[] => {
  const [h, s, v] = hsv;
  const f = (n, k = (n + h / 60) % 6) =>
    v - v * s * Math.max(Math.min(k, 4 - k, 1), 0);

  return [f(5), f(3), f(1)];
};

/**
 * Get a text color that provides good contrast with the given background color.
 *
 * @param {number[] | string} rgb - Background color as an RGB array [r, g, b] or a string in the format 'r,g,b'.
 * @returns {number[]} - RGB color values for the text [Red (0-255), Green (0-255), Blue (0-255)].
 *
 * @example
 * // Using an RGB array
 * const textColor = getTextColor([255, 128, 64]);
 *
 * // Using a string
 * const textColor = getTextColor('255,128,64');
 */
export const getTextColor = (rgb: number[] | string): number[] => {
  if (typeof rgb === 'string') {
    rgb = rgb.split(',').map((a) => parseInt(a));
  }

  const [r, g, b] = rgb;
  const hsv = rgb2hsv(r, g, b);
  const step = 0.01;

  let brightness = weightedW3C(rgb);

  if (brightness < 127) {
    while (brightness < 127 && hsv[2] >= 0 && hsv[2] <= 1) {
      hsv[2] += step;
      brightness = weightedW3C(hsv2rgb(hsv));
    }
  } else {
    while (brightness > 127 && hsv[2] >= 0 && hsv[2] <= 1) {
      hsv[2] -= step;
      brightness = weightedW3C(hsv2rgb(hsv));
    }
  }

  return hsv2rgb(hsv);
};
