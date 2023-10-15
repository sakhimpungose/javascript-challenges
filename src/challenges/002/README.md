# Matrix Rotation

## Rating
⭐⭐⭐⭐⭐ (5/5)

## Problem Statement

You are given a 2D matrix of dimension  and a positive integer . You have to rotate the matrix  times and print the resultant matrix. Rotation should be in anti-clockwise direction.

Rotation of a  matrix is represented by the following figure. Note that in one rotation, you have to shift elements by one step only.

![Alt text](./matrix-rotation.png "Matrix Rotation")

It is guaranteed that the minimum of m and n will be even.

As an example rotate the Start matrix by 2:
```
    Start         First           Second
     1 2 3 4       2  3  4  5      3  4  5  6
    12 1 2 5  ->   1  2  3  6 ->   2  3  4  7
    11 4 3 6      12  1  4  7      1  2  1  8
    10 9 8 7      11 10  9  8     12 11 10  9
```

## Function Signature

```javascript
/**
 * Rotates the matrix r times and print the resultant matrix
 * @param {Array} matrix - a 2D array of integers.
 * @param {int} r - the rotation factor.
 * @returns {Array} - the resultant matrix.
 */
function matrixRotation(matrix, r)
{
    // You code here
}
```

## Test
```sh
npx mocha src/challenges/002/index.test.js
```

## Source
https://www.hackerrank.com/challenges/matrix-rotation-algo/problem