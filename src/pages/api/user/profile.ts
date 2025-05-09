import type { APIRoute } from 'astro';
import { getSession } from 'auth-astro/server';
import { connectDB } from '@/lib/db';
import User from '@/schemas/user';

const res = (
  body: string | object,
  { status, statusText }: { status?: number; statusText?: string; headers?: Headers },
): Response => new Response(JSON.stringify(body), { status, statusText });

export const GET: APIRoute = async ({ request }) => {
  const session = await getSession(request);
  if (!session?.user) {
    return res({ message: 'Unauthorized' }, { status: 401 });
  }

  try {
    await connectDB();

    const findUser = await User.findOne({ name: session.user.name });
    if (!findUser) {
      return res({ message: 'User not found' }, { status: 404 });
    }

    return res(findUser, { status: 200 });
  } catch (err) {
    console.error('Error in /api/user/profile:', err);
    return res({ message: 'Internal Server Error' }, { status: 500 });
  }
};
