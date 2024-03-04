/*
 * Converts a base64-encoded string to its hexadecimal representation. This function first decodes
 * the base64 string to a raw binary string using the atob() function. Then, it iterates over each
 * character in the binary string, converting it to its corresponding hexadecimal value. Each byte
 * (character) is converted to a two-digit hexadecimal number, and these hexadecimal numbers are
 * concatenated to form the final hexadecimal string representation of the input base64 data.
 *
 * Parameters:
 *     base64    the base64-encoded string to be converted
 *
 * Returns:
 *     A string representing the hexadecimal representation of the decoded base64 input. Each byte
 *     of the input data is represented as two hexadecimal digits in the output string.
 *
 * Example Usage:
 *     const base64String = 'SGVsbG8gV29ybGQ='; // "Hello World" in base64
 *     const hexString = base64ToHex(base64String);
 *     console.log(hexString); // Outputs the hexadecimal representation of "Hello World"
 *
 * Note:
 *     This function assumes a browser environment where atob() is available for base64 decoding.
 */

export default function base64ToHex(base64) {
  const binaryString = atob(base64);

  let hexString = '';
  for (let i = 0; i < binaryString.length; i++) {
    const charCode = binaryString.charCodeAt(i);

    hexString += charCode.toString(16).padStart(2, '0');
  }

  return `0x${hexString.toUpperCase()}`;
}
