// 3-list.js
import { List, Map } from 'immutable';

// Function to concatenate two arrays into an Immutable List
export function concatElements(page1, page2) {
  return List(page1).concat(List(page2));
}

// Function to merge two objects into an Immutable List
export function mergeElements(page1, page2) {
  const map1 = Map(page1);
  const map2 = Map(page2);
  return map1.merge(map2).toList();
}

// Example usage
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const concatenatedList = concatElements(array1, array2);
console.log(concatenatedList); // List [ "a", "b", "c", "d", "e", "f" ]

const obj1 = { 1: 'Liam', 2: 'Noah', 3: 'Elijah' };
const obj2 = { 2: 'Benjamin', 4: 'Oliver' };
const mergedList = mergeElements(obj1, obj2);
console.log(mergedList); // List [ "Liam", "Benjamin", "Elijah", "Oliver" ]
