import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  // Prisma create query to seed models in database
  await prisma.role.createMany({
    data: [{ role: 'admin' }, { role: 'user' }],
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
