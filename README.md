# string-to-integer-atoi
Here’s a **clean, interview-ready JavaScript implementation** of **`myAtoi(string s)`**, explained step-by-step in **easy words**, exactly following the rules you described.

---

## ✅ Key Rules Recap (in simple terms)

1. **Ignore leading spaces**
2. **Check sign** (`+` or `-`)
3. **Read digits only** (stop at first non-digit)
4. **If no digits → return 0**
5. **Clamp result** to **32-bit signed integer range**

   * Min: `-2^31 = -2147483648`
   * Max: `2^31 - 1 = 2147483647`

---

## 🧠 Approach (How we think)

We move through the string **character by character**:

1. Skip spaces
2. Detect sign
3. Convert digits into a number
4. Stop when character is not a digit
5. Apply sign
6. Clamp within limits

---

## 🧩 JavaScript Code (LeetCode Accepted)

```js
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
```

---

## 🧪 Example Walkthroughs

### Example 1

```js
myAtoi("42") → 42
```

### Example 2

```js
myAtoi("   -042") → -42
```

### Example 3

```js
myAtoi("1337c0d3") → 1337
```

### Example 4

```js
myAtoi("0-1") → 0
```

### Example 5

```js
myAtoi("words and 987") → 0
```

---

## ⏱️ Time & Space Complexity

* **Time:** `O(n)` (single pass through string)
* **Space:** `O(1)` (no extra memory used)

---


