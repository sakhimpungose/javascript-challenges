# Encryption Challenge

## Rating
⭐⭐ (2/5)

## Problem Statement

You are tasked with creating a function that performs a simple encryption using an encryption key and a message. The encryption algorithm follows these steps:

1. Take an encryption key, which is a string with an even number of characters.
2. Group the letters of the key by two. For example, "gaderypoluki" should be grouped as "ga de ry po lu ki".

Now, take the message you want to encrypt. For each character in the message:

1. If the character appears in the key, replace it with the adjacent character in the grouped version of the key.
2. If the character does not appear in the key, leave it as is.
3. If a letter in the key occurs more than once, use the first occurrence for replacement.

## Function Signature

```javascript
/**
 * Encrypts a message using the given encryption key.
 * @param {string} key - A string with an even number of characters.
 * @param {string} message - A string containing the message to be encrypted.
 * @returns {string} - The encrypted message.
 */
function encrypt(key, message)
{
    // You code here
}
```

## Examples

```javascript
encrypt('ab c', 'abc ab') // 'ba cba'
encrypt("otorhinolaryngological", 'My name is Paul') // 'Mr olme hs Plua'
encrypt('gaderypoluki', 'This is an encrypted message') // 'Thks ks gn dncyrotde mdssgad'
```

## Test
```sh
npx mocha src/challenges/001/index.test.js
```
