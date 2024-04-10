// Utillity functions

// Get HTML element by id
export function getElement(selector, scope = document) {
  return scope.getElementById(selector);
}

// Select HTML element
export function select(selector, scope = document) {
  return scope.querySelector(selector);
}

// Get a list of HTML elements as an array
export function selectAll(selector, scope = document) {
  return [...scope.querySelectorAll(selector)];
}

// Add event listener
export function listen(event, selector, callback) {
  return selector.addEventListener(event, callback);
}

// Returns an array with n values from 0 to n - 1 
export function initArray(n) {
  return Array.from(Array(n).keys());
}

// Sleep
export function sleep(duration) {
  return new Promise(resolve => {
    setTimeout(resolve, duration)
  });
}

// Generate random number between - and including - 'min' and 'max'
export function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Filter array
export function filterArray(array, callback) {
  return array.filter(callback);
}

// Create an HTML element
export function create(element) {
  return document.createElement(element);
}