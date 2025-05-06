import type { APIRoute } from 'astro';
import { getSession } from 'auth-astro/server';
import User from '@/schemas/user';

const res = (
  body: string | object,
  { status, statusText }: { status?: number; statusText?: string; headers?: Headers },
): Response => new Response(JSON.stringify(body), { status, statusText });

// GET -> api/user/[userName]
export const GET: APIRoute = async ({ params, request }) => {
  const session = await getSession(request);
  if (session?.user === null) {
    return res({ message: 'Unauthorized' }, { status: 401 });
  }

  const findUser = await User.findOne({ name: params.userName });
  if (!findUser) {
    return res({ message: 'User not found' }, { status: 404 });
  }

  return res(findUser, { status: 200 });
};
