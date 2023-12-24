import Prisma, * as PrismaScope from '@prisma/client';
import type { PrismaClient } from '@prisma/client';

// export let prisma: PrismaClient;

const prismaClient = Prisma?.PrismaClient || PrismaScope?.PrismaClient;

// if (import.meta.env.PROD) {
export default new prismaClient();
// } else {
//   if (!global.prisma) {
//     global.prisma = new prismaClient();
//   }
//   prisma = global.prisma;
// }
