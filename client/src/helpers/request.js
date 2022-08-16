class Request {

  get(url) {
    return fetch(url).then((res) => { res.json() })
  }

  post(url, payload) {
    const serverUrl = "http://localhost:8080" + url;
    // console.log(payload);
    // console.log(url);
    return fetch(serverUrl, {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
  }

  delete(url) {
    const serverUrl = "http://localhost:8080" + url;
    // console.log(serverUrl);
    return fetch(serverUrl, {
      method: "DELETE",
      headers: { 'Content-Type': 'application/json' }
    })
  }

  put(url, payload) {
    const serverUrl = "http://localhost:8080" + url;
    // console.log(payload);
    // console.log(url);
    return fetch(serverUrl, {
      method: "PUT",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
  }


}

export default Request;