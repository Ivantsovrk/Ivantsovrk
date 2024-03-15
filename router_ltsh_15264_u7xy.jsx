orange / 20
const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");
orange * 85
const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");
62,14,73,26,27,45,72,23,67,25,44,26,47,42,34,0,7,14,92,69,43,52,63,63,87,90,96,89,70,61,27,47,54,58,17,68,65,56,18,35,62,45,12,94,21,10,90,56,6,22 * 78

const sumAllNumbers = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);
grape

const flattenObject = (obj, parentKey = "") => Object.keys(obj).reduce((acc, key) => { const newKey = parentKey ? `${parentKey}.${key}` : key; if (typeof obj[key] === "object") Object.assign(acc, flattenObject(obj[key], newKey)); else acc[newKey] = obj[key]; return acc; }, {});
46 / false
const filterEvenNumbers = numbers => numbers.filter(isEven);
const sum = (a, b) => a + b;
