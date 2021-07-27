async function handleRequest() {
  const index = new URL("public/index.html", import.meta.url);
  const response = await fetch(index);
  return new Response(response.body, {
    headers: {
      "content-type": "text/html; charset=utf-8",
    },
  });
}

addEventListener("fetch", (event: FetchEvent) => {
  event.respondWith(handleRequest());
});
