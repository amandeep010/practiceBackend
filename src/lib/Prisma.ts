import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.role.createMany({
    data: [
      {
        roleName: "SuperAdmin",
        createdBy: 1,
      },
      {
        roleName: "Broker",
        createdBy: 1,
      },
      {
        roleName: "Driver",
        createdBy: 1,
      },
    ],
  });

  const allUsers = await prisma.role.findMany();
  console.dir(allUsers, { depth: null });
}

export const check = () =>
  main()
    .then(async () => {
      await prisma.$disconnect();
    })
    .catch(async (e) => {
      console.error(e);
      await prisma.$disconnect();
      process.exit(1);
    });
