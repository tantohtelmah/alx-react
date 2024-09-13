export default function accessImmutableObject(object, array) {
	return array.reduce((acc, key) => (acc && acc[key] !== undefined) ? acc[key] : undefined, object);
  }
  
  // Example usage
  const obj = {
	name: {
	  first: "Guillaume",
	  last: "Salva"
	}
  };
  
  console.log(accessImmutableObject(obj, ['name', 'first'])); // Should return "Guillaume"
  console.log(accessImmutableObject(obj, ['name', 'middle'])); // Should return undefined
  console.log(accessImmutableObject(obj, ['age'])); // Should return undefined
  