import { PrismaClient } from '@prisma/client';


export const prisma = new PrismaClient()

// if (import.meta.env.PROD) {
// prisma = new prismaClient();
// } else {
//   if (!global.prisma) {
//     global.prisma = new prismaClient();
//   }
//   prisma = global.prisma;
// }
