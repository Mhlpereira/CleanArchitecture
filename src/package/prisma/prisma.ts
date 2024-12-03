import { PrismaClient } from "@prisma/client";

//evita ficar abrindo várias conexões com o banco de dados
export const prisma = new PrismaClient();