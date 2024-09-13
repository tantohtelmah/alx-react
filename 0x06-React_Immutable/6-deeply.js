// 3-list.js
import { Map, List } from 'immutable';

export function mergeDeeplyElements(page1, page2) {
  const map1 = Map(page1);
  const map2 = Map(page2);
  const mergedMap = map1.mergeDeep(map2);
  return mergedMap.toList();
}

// Example usage
const page1 = {
  'user-1': {
    id: 1,
    name: 'test',
    likes: {
      1: {
        uid: 1234,
      }
    }
  }
};

const page2 = {
  'user-1': {
    likes: {
      2: {
        uid: 134,
      }
    }
  }
};

const mergedList = mergeDeeplyElements(page1, page2);
console.log(mergedList.toJS());
