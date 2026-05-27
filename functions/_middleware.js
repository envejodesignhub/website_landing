export async function onRequest(context) {
  const url = new URL(context.request.url);
  
  // Try to fetch the requested asset
  const response = await context.env.ASSETS.fetch(context.request);
  
  // If asset exists (200) or is being redirected (3xx), return it
  if (response.status < 400) {
    return response;
  }
  
  // For 404s on non-asset paths (SPA routes), serve index.html
  if (response.status === 404 && !url.pathname.match(/\.[a-zA-Z0-9]+$/)) {
    return context.env.ASSETS.fetch(new URL('/index.html', url.origin));
  }
  
  // Return the original response for actual 404s (missing assets, etc.)
  return response;
}
