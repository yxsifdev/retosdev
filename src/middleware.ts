// import { defineMiddleware } from 'astro:middleware';
// import { getSession } from 'auth-astro/server';

// export const onRequest = defineMiddleware(async (context, next) => {
//   const { url, request, redirect } = context;
//   const pathname = new URL(url).pathname;

//   // Verificar rutas protegidas
//   const isProtectedRoute = pathname.startsWith('/learn') || pathname.startsWith('/api');

//   // Si es una ruta protegida
//   if (isProtectedRoute) {
//     const session = await getSession(request); // Implementa esta función según tu auth

//     if (!session) {
//       if (pathname.startsWith('/api')) {
//         return redirect('/', 301);
//       } else {
//         return redirect('/', 302);
//       }
//     }

//     // Si está autenticado pero accede directamente a /api
//     if (pathname.startsWith('/api') && request.headers.get('sec-fetch-dest') !== 'fetch') {
//       return redirect('/learn', 302);
//     }
//   }

//   return next();
// });
