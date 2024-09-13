// 3-list.js
import { Map } from 'immutable';

// Create the initial map
export const map = Map({
  1: 'Liam',
  2: 'Noah',
  3: 'Elijah',
  4: 'Oliver',
  5: 'Jacob',
  6: 'Lucas',
});

// Create the modified map
export const map2 = map
  .set(2, 'Benjamin')
  .set(4, 'Oliver');

// Example usage
console.log(map.toString());  // Map { "1": "Liam", "2": "Noah", "3": "Elijah", "4": "Oliver", "5": "Jacob", "6": "Lucas" }
console.log(map2.toString()); // Map { "1": "Liam", "2": "Benjamin", "3": "Elijah", "4": "Oliver", "5": "Jacob", "6": "Lucas" }
