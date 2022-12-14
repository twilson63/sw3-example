# Service Worker Server

The idea is to use a service worker to create a pushstate server. What is a pushstate server? A pushstate server is a server that serves the index.html page when the requested url path is 404 or not found.

This should allow for SPA applications to leverage calls as if they are a server side application in terms of workflow.

Using service workers, we will listen for the fetch GET method, and if the response is successful, then we return the response, but if the response results in a 404, we read index.html page from the server.


```js
addEventListener('fetch', (event) => {
  // Prevent the default, and handle the request ourselves.
  event.respondWith((async () => {
    const response = await fetch(event.request)
    if (response.status === 404) {
      return fetch('/index.html')
    } else {
      return response
    }
  })());
});
```
