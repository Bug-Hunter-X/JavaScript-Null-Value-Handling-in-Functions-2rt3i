function foo(a, b) {
  if (a === null || b === null) {
    return 0; // Handle null values by returning 0 or another suitable value
  }
  return a + b; // ... rest of your function
}

//Alternative solution (throwing error for null parameters)
function foo(a, b) {
  if (a === null || b === null) {
    throw new Error('Parameters cannot be null.');
  }
  return a + b; // ... rest of your function
}