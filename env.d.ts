/// <reference types="node" />

namespace NodeJS {
  export interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test';
    NEXTAUTH_URL: string;
    NEXTAUTH_SECRET: string;
    MONGODB_URI: string;
    GOOGLE_CLIENT_ID: string;
    GOOGLE_CLIENT_SECRET: string;
    GITHUB_ID: string;
    GITHUB_SECRET: string;
    EMAIL_USER: string;
    EMAIL_PASS: string;
    SHEET_BEST_ID: string;
    GITHUB_TOKEN?: string;
    GITHUB_USERNAME?: string;
    LEETCODE_USERNAME?: string;
  }
}
