import type { MiddlewareHandler } from 'astro';

export function onRequest: MiddlewareHandler (context, next) {
  // interceptar los datos de una solicitud.
  // opcionalmente, modifica las propiedades en `locals`.
  context.locals.title = "Nuevo título";

  // devuelve una respuesta o el resultado de llamar a `next()`.
  return next();
};