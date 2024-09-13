// 3-list.js
import { List } from 'immutable';

export function getListObject(array) {
  return List(array);
}

export function addElementToList(list, element) {
  return list.push(element);
}

// Example usage
const array = ['a', 'b', 'c'];
const list = getListObject(array);
console.log(list); // List [ "a", "b", "c" ]

const updatedList = addElementToList(list, 'd');
console.log(updatedList); // List [ "a", "b", "c", "d" ]
