export default async function requestFromApi(apiEndpoint, fetchFunc) {
  try {
    let response = await fetchFunc(apiEndpoint);
    if (response.ok) {
      let body = await response.json();
      return body;
    } else {
      return undefined;
    }
  } catch {
    return undefined;
  }
}
