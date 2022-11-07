<script>
  import { Route } from "tinro";
</script>

<nav>
  <a href="/">Home Page</a>
  <a href="/about">About Page</a>
</nav>

<main>
  <Route path="/">
    <h1>Home Page</h1>
  </Route>
  <Route path="/about">
    <h1>About Page</h1>
  </Route>
  <Route fallback>No page found</Route>
</main>
