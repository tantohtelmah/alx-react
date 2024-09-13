import { fromJS } from 'immutable';

function getImmutableObject(object) {
  return fromJS(object);
}

export default { getImmutableObject };

// Example usage
const exampleObject = {
  fear: true,
  smell: -1033575916.9145899,
  wall: false,
  thing: -914767132
};

const immutableMap = getImmutableObject(exampleObject);
console.log(immutableMap);
