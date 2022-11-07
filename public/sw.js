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