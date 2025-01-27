# JavaScript Null Value Handling in Functions

This repository demonstrates a common error in JavaScript:  incorrectly handling null values passed as function parameters.  Null values are often overlooked, and if not managed properly, can cause unexpected errors, especially in functions that perform calculations or data manipulation. 

## The Problem

Many JavaScript functions don't explicitly check for null or undefined values in their input parameters. This can lead to unexpected behavior when null values are passed, potentially resulting in runtime errors like `TypeError: Cannot read properties of null (reading '... ')`.

## The Solution

The most robust way is to include explicit checks for null or undefined at the beginning of the function, often using conditional statements such as `if` or `else if` to return a default value or throw an error. This provides a graceful way of handling null input and prevents unexpected runtime crashes. 

## How to use this repository

1. Clone this repository.
2. Inspect the `bug.js` to see the example of improper null handling, and `bugSolution.js` for the corrected implementation.
