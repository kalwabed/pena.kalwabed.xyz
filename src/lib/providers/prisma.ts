import Prisma, * as PrismaScope from '@prisma/client';
import type { PrismaClient } from '@prisma/client';

export let prisma: PrismaClient;
const global: { prisma: PrismaClient } = { prisma: null };

const prismaClient = Prisma?.PrismaClient || PrismaScope?.PrismaClient;

if (import.meta.env.PROD) {
  prisma = new prismaClient();
} else {
  if (!global?.prisma) {
    global.prisma = new prismaClient();
  }
  prisma = global.prisma;
}
