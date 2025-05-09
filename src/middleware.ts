import { defineMiddleware } from 'astro:middleware';
import { getSession } from 'auth-astro/server';

const publicRoutes = ['/', '/blog', '/blog/*', '/api/auth/*'];

export const onRequest = defineMiddleware(async (context, next) => {
  const { url } = context;

  if (
    publicRoutes.some(
      route =>
        route === url.pathname ||
        (route.endsWith('*') && url.pathname.startsWith(route.slice(0, -1))),
    )
  ) {
    return next();
  }

  const session = await getSession(context.request);

  if (!session) {
    return Response.redirect(new URL('/', url.origin), 302);
  }

  return next();
});
