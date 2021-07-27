async function handleRequest(request: Request) {
  const { pathname } = new URL(request.url);

  if (pathname.startsWith("/app.js")) {
    const js = new URL("public/app.js", import.meta.url);
    return fetch(js);
  }

  const index = new URL("public/index.html", import.meta.url);
  const response = await fetch(index);
  return new Response(response.body, {
    headers: {
      "content-type": "text/html; charset=utf-8",
    },
  });
}

addEventListener("fetch", (event: FetchEvent) => {
  event.respondWith(handleRequest(event.request));
});
