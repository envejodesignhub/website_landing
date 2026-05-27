export async function onRequest(context) {
  const url = new URL(context.request.url);
  const pathname = url.pathname;
  
  // If it's a request for a static asset (has extension), serve it directly
  if (pathname.match(/\.[a-zA-Z0-9]+$/)) {
    return context.next();
  }
  
  // For all other routes (SPA routes), serve index.html
  const response = await context.env.ASSETS.fetch(new URL('/index.html', url.origin));
  
  return new Response(response.body, {
    status: 200,
    headers: response.headers
  });
}
