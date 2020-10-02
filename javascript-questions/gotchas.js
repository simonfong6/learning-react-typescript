// https://www.toptal.com/javascript/interview-questions

// Checking if a variable is an object.
// Reliable, but pitfall with null being an object.
function isObject(thing) {
  return typeof bar === "object";
}
var bar = null;
console.log(isObject(bar));
