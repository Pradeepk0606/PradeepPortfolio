import { z } from 'zod';

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  NEXTAUTH_URL: z.string().url().default('http://localhost:3000'),
  NEXTAUTH_SECRET: z.string().default('dev-secret-replace-in-production'),
  
  // Database (optional for now)
  MONGODB_URI: z.string().url().optional(),
  
  // OAuth Providers (optional)
  GOOGLE_CLIENT_ID: z.string().optional(),
  GOOGLE_CLIENT_SECRET: z.string().optional(),
  GITHUB_ID: z.string().optional(),
  GITHUB_SECRET: z.string().optional(),
  
  // Email (optional)
  EMAIL_USER: z.string().email().optional(),
  EMAIL_PASS: z.string().optional(),
  
  // Other optional fields
  GITHUB_TOKEN: z.string().optional(),
  GITHUB_USERNAME: z.string().optional(),
  LEETCODE_USERNAME: z.string().optional(),
  SHEET_BEST_ID: z.string().optional(),
});

type Env = z.infer<typeof envSchema>;

// Validate environment variables
const _env = envSchema.safeParse(process.env);

if (!_env.success) {
  console.error('❌ Invalid environment variables:', JSON.stringify(_env.error.format(), null, 2));
  throw new Error('Invalid environment variables');
}

export const env = _env.data as Env;
