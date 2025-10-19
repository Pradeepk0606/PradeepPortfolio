import { DefaultSession, NextAuthOptions } from 'next-auth';
import { env } from './env';

// Extend the built-in session types
declare module 'next-auth' {
  interface Session extends DefaultSession {
    user: {
      id: string;
    } & DefaultSession['user'];
  }
}

// Export a function that returns the auth options
export async function getAuthOptions(): Promise<NextAuthOptions> {

// Initialize adapter as undefined - will use in-memory storage
let adapter = undefined;

// Only try to use MongoDB if the URI is provided
if (env.MONGODB_URI) {
  try {
    // Use dynamic imports to avoid loading these in memory if not needed
    const { MongoDBAdapter } = await import('@auth/mongodb-adapter');
    const { MongoClient } = await import('mongodb');
    
    const client = new MongoClient(env.MONGODB_URI);
    await client.connect();
    adapter = MongoDBAdapter(client);
  } catch (error) {
    console.warn('MongoDB adapter not available. Authentication will use in-memory storage.');
    console.error('MongoDB Error:', error);
  }
}

// Only include providers that have the required credentials
const providers = [];

// Add Google provider if credentials are available
if (env.GOOGLE_CLIENT_ID && env.GOOGLE_CLIENT_SECRET) {
  const GoogleProvider = require('next-auth/providers/google').default;
  providers.push(
    GoogleProvider({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
    })
  );
}

// Add GitHub provider if credentials are available
if (env.GITHUB_ID && env.GITHUB_SECRET) {
  const GitHubProvider = require('next-auth/providers/github').default;
  providers.push(
    GitHubProvider({
      clientId: env.GITHUB_ID,
      clientSecret: env.GITHUB_SECRET,
    })
  );
}

// Always include Credentials provider as a fallback
const CredentialsProvider = require('next-auth/providers/credentials').default;
providers.push(
  CredentialsProvider({
    name: 'Credentials',
    credentials: {
      email: { label: "Email", type: "email" },
      password: { label: "Password", type: "password" }
    },
    async authorize(credentials: Record<string, string> | undefined) {
      // In a real app, you should implement proper authentication
      // For demo purposes, we're returning a mock user
      return {
        id: 'demo-user',
        name: 'Demo User',
        email: 'demo@example.com',
        image: null
      };
    }
  })
);

  return {
  adapter,
  providers,
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/auth/signin',
    error: '/auth/error',
  },
  callbacks: {
    async session({ session, token }) {
      if (session.user && token.sub) {
        session.user.id = token.sub;
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
  },
  secret: env.NEXTAUTH_SECRET,
    debug: env.NODE_ENV === 'development',
  };
}
