// SPDX-License-Identifier: MIT
pragma solidity ^0.8.6;

library SignedSafeMath {
    int256 private constant MIN_INT256 = type(int256).min;
    int256 private constant MAX_INT256 = type(int256).max;

    /**
     * @dev Multiplies two signed integers, reverts on overflow.
     */
    function mul(int256 a, int256 b) internal pure returns (int256) {
        require(!(a == -1 && b == MIN_INT256), "SignedSafeMath: multiplication overflow");

        int256 c = a * b;
        require(c / a == b, "SignedSafeMath: multiplication overflow");

        return c;
    }

    /**
     * @dev Integer division of two signed integers truncating the quotient, reverts on division by zero.
     */
    function div(int256 a, int256 b) internal pure returns (int256) {
        require(b != 0, "SignedSafeMath: division by zero");
        require(!(b == -1 && a == MIN_INT256), "SignedSafeMath: division overflow");

        int256 c = a / b;

        return c;
    }

    /**
     * @dev Subtracts two signed integers, reverts on overflow.
     */
    function sub(int256 a, int256 b) internal pure returns (int256) {
        require((b >= 0 && a >= b) || (b < 0 && a > b), "SignedSafeMath: subtraction overflow");

        int256 c = a - b;

        return c;
    }

    /**
     * @dev Adds two signed integers, reverts on overflow.
     */
    function add(int256 a, int256 b) internal pure returns (int256) {
        require((b >= 0 && a <= MAX_INT256 - b) || (b < 0 && a >= MIN_INT256 - b), "SignedSafeMath: addition overflow");

        int256 c = a + b;

        return c;
    }

    /**
     * @notice Computes average of two signed integers, ensuring that the computation
     * doesn't overflow.
     * @dev If the result is not an integer, it is rounded towards zero. For example,
     * avg(-3, -4) = -3
     */
    function avg(int256 _a, int256 _b) internal pure returns (int256) {
        if ((_a < 0 && _b > 0) || (_a > 0 && _b < 0)) {
            return add(_a, _b) / 2;
        }
        int256 remainder = (_a % 2 + _b % 2) / 2;
        return add(add(_a / 2, _b / 2), remainder);
    }
}
