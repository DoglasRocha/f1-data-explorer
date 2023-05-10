export default async function requestFromApi(apiEndpoint, fetchFunc) {
  	try {
    	let response = await fetchFunc(apiEndpoint);
    	if (response.ok) {
      		let body = await response.json();
      	return body;
    	} 
    	else {
      		return undefined;
    	}
  	} 
  	catch {
    	return undefined;
  	}
}

export function unwrapObject(object, error, ...attributes) {
	attributes.forEach(attribute => {
		if (object.length) 
			object = object[0];

		if (object[attribute])
			object = object[attribute];
		else 
			return error;
	})

	return object;
}