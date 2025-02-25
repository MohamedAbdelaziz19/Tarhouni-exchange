import { prisma } from './lib/prisma';


async function main() {
  try {
    const devises = await prisma.devise.findMany();
    console.log("Devises :", devises);
  } catch (error) {
    console.error("Erreur de connexion :", error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
