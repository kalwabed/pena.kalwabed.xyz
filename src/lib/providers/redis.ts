import { Redis } from '@upstash/redis';

const redis = new Redis({
  url: import.meta.env.VITE_REDIS_URL as string,
  token: import.meta.env.VITE_REDIS_TOKEN as string
});

export default redis;
