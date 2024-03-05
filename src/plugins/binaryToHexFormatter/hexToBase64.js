/*
 * Converts a hexadecimal string into its base64 representation. This function first strips any '0x' prefix
 * from the input hexadecimal string to ensure proper conversion. It then iterates over the hexadecimal string
 * in 2-character increments, each representing a byte, converting these hexadecimal pairs into binary data.
 * This binary data is subsequently encoded into a base64 string using the btoa() function, which is a built-in
 * browser API for base64 encoding of binary strings.
 *
 * Parameters:
 *     hexStr    The hexadecimal string to be converted to base64. Can optionally start with '0x'.
 *
 * Returns:
 *     A string representing the base64 encoded form of the input hexadecimal data.
 *
 * Example Usage:
 *     const hexString = '48656C6C6F'; // Hexadecimal for 'Hello'
 *     const base64String = hexToBase64(hexString);
 *     console.log(base64String); // Outputs the base64 representation of 'Hello'
 *
 * Note:
 *     This function is intended to be used in environments where the btoa() function is available,
 *     such as web browsers. For Node.js or other environments, an alternative base64 encoding method
 *     may be required.
 *
 *     It's important to ensure that the input hexadecimal string is a valid representation of binary data,
 *     with even length and only containing valid hexadecimal digits (0-9, A-F, a-f).
 */

export default function hexToBase64(hexStr) {
    // just in case
    hexStr = hexStr.replace(/^0x/, '');

    let binaryStr = '';

    for (let i = 0; i < hexStr.length; i += 2) {
        binaryStr += String.fromCharCode(parseInt(hexStr.substr(i, 2), 16));
    }

    return btoa(binaryStr);
}
