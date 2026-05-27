export function onRequest(context) {
  const url = new URL(context.request.url);
  
  // If request is for an asset (has file extension), pass through
  if (url.pathname.includes('.')) {
    return context.next();
  }
  
  // For all other routes, serve index.html for client-side routing
  return context.env.ASSETS.fetch(new URL('/index.html', url.origin));
}
