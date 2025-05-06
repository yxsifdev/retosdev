import GitHub from '@auth/core/providers/github';
import { defineConfig } from 'auth-astro';
import User from '@/schemas/user';
import { connectDB } from '@/lib/db';

export default defineConfig({
  providers: [
    GitHub({
      clientId: import.meta.env.GITHUB_CLIENT_ID,
      clientSecret: import.meta.env.GITHUB_CLIENT_SECRET,
    }),
  ],
  pages: {
    signIn: '/',
    signOut: '/',
  },
  callbacks: {
    async signIn({ user }) {
      try {
        await connectDB();
        const existingUser = await User.findOne({ email: user.email });
        if (!existingUser) {
          const newUser = await User.create({
            name: user.name,
            email: user.email,
            image: user.image,
          });
          await newUser.save();
        }

        return true;
      } catch (err) {
        console.error('Error during signIn callback:', err);
        return false;
      }
    },

    async session({ session }) {
      await connectDB();
      const dbUser = await User.findOne<{ _id: string; name: string }>({
        email: session.user.email,
      });
      if (dbUser) {
        session.user.id = dbUser._id;
        session.user.name = dbUser.name;
      }

      return session;
    },
  },
});
