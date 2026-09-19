import { z } from 'zod';

const emptyToUndefined = (val: unknown) => (typeof val === 'string' && val.trim() === '' ? undefined : val);

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  NEXTAUTH_URL: z.preprocess(emptyToUndefined, z.string().optional()).default('http://localhost:3000'),
  NEXTAUTH_SECRET: z.preprocess(emptyToUndefined, z.string().optional()).default('dev-secret-replace-in-production'),
  
  // Database (optional for now)
  MONGODB_URI: z.preprocess(emptyToUndefined, z.string().optional()),
  
  // OAuth Providers (optional)
  GOOGLE_CLIENT_ID: z.preprocess(emptyToUndefined, z.string().optional()),
  GOOGLE_CLIENT_SECRET: z.preprocess(emptyToUndefined, z.string().optional()),
  GITHUB_ID: z.preprocess(emptyToUndefined, z.string().optional()),
  GITHUB_SECRET: z.preprocess(emptyToUndefined, z.string().optional()),
  
  // Email (optional)
  EMAIL_USER: z.preprocess(emptyToUndefined, z.string().optional()),
  EMAIL_PASS: z.preprocess(emptyToUndefined, z.string().optional()),
  
  // Other optional fields
  GITHUB_TOKEN: z.preprocess(emptyToUndefined, z.string().optional()),
  GITHUB_USERNAME: z.preprocess(emptyToUndefined, z.string().optional()),
  LEETCODE_USERNAME: z.preprocess(emptyToUndefined, z.string().optional()),
  SHEET_BEST_ID: z.preprocess(emptyToUndefined, z.string().optional()),
});

type Env = z.infer<typeof envSchema>;

// Validate environment variables
const _env = envSchema.safeParse(process.env);

if (!_env.success) {
  console.warn('⚠️ Environment variable notice:', _env.error.format());
}

export const env = (_env.success ? _env.data : {
  NODE_ENV: (process.env.NODE_ENV as any) || 'development',
  NEXTAUTH_URL: process.env.NEXTAUTH_URL || 'http://localhost:3000',
  NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET || 'dev-secret-replace-in-production',
  MONGODB_URI: process.env.MONGODB_URI || undefined,
  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID || undefined,
  GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET || undefined,
  GITHUB_ID: process.env.GITHUB_ID || undefined,
  GITHUB_SECRET: process.env.GITHUB_SECRET || undefined,
  EMAIL_USER: process.env.EMAIL_USER || undefined,
  EMAIL_PASS: process.env.EMAIL_PASS || undefined,
  GITHUB_TOKEN: process.env.GITHUB_TOKEN || undefined,
  GITHUB_USERNAME: process.env.GITHUB_USERNAME || undefined,
  LEETCODE_USERNAME: process.env.LEETCODE_USERNAME || undefined,
  SHEET_BEST_ID: process.env.SHEET_BEST_ID || undefined,
}) as Env;
