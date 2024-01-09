import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: {},
        password: {},
      },
      async authorize(credentials, req) {
        console.log('credentials', credentials);
        const user = { id: '1', name: credentials?.username, email: 'test@test.com' };

        if (user) {
          return user;
        }

        return null;
      },
    }),
  ],
  session: {
    maxAge: 5,
  },
  jwt: {
    maxAge: 5,
  },
  callbacks: {
    async jwt({
      token, user, trigger, session,
    }) {
      console.log('trigger1', trigger, token);
      if (trigger === 'update') {
        return { ...token, ...session.user };
      }

      return { ...token, ...user };
    },

    async session({ session, token }) {
      // eslint-disable-next-line no-param-reassign
      session.user = token;

      return session;
    },

    async redirect({ url, baseUrl }) {
      const isRelativeUrl = url.startsWith('/');
      if (isRelativeUrl) {
        return `${baseUrl}${url}`;
      }

      const isSameOriginUrl = new URL(url).origin === baseUrl;
      const alreadyRedirected = url.includes('callbackUrl=');
      if (isSameOriginUrl && alreadyRedirected) {
        const originalCallbackUrl = decodeURIComponent(url.split('callbackUrl=')[1]);

        return originalCallbackUrl;
      }

      if (isSameOriginUrl) {
        return url;
      }

      return baseUrl;
    },
  },
  pages: {
    signIn: '/login',
  },
});

export { handler as GET, handler as POST };
