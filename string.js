var myAtoi = function(s) {
    let i = 0;
    let sign = 1;
    let result = 0;

    const INT_MAX = 2147483647;
    const INT_MIN = -2147483648;

    // 1. Ignore leading whitespace
    while (i < s.length && s[i] === ' ') {
        i++;
    }

    // 2. Check sign
    if (i < s.length && (s[i] === '+' || s[i] === '-')) {
        sign = s[i] === '-' ? -1 : 1;
        i++;
    }

    // 3. Read digits
    while (i < s.length && s[i] >= '0' && s[i] <= '9') {
        result = result * 10 + (s[i] - '0');

        // 4. Clamp during conversion to avoid overflow
        if (sign * result >= INT_MAX) return INT_MAX;
        if (sign * result <= INT_MIN) return INT_MIN;

        i++;
    }

    // 5. Apply sign
    return sign * result;
};
