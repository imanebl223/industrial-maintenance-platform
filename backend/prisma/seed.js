import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function main() {
  // Mot de passe haché pour admin
  const adminPassword = await bcrypt.hash("admin123", 10);

  // Mot de passe haché pour technicien
  const techPassword = await bcrypt.hash("tech123", 10);

  // Créer admin
  await prisma.user.upsert({
    where: { email: "imaneadmin@gmail.com" },
    update: {},
    create: {
      email: "imaneadmin@gmail.com",
      password: adminPassword,
      role: "admin",
      name: "Imane Admin"
    }
  });

  // Créer technicien
  await prisma.user.upsert({
    where: { email: "imanetech@gmail.com" },
    update: {},
    create: {
      email: "imanetech@gmail.com",
      password: techPassword,
      role: "technicien",
      name: "Imane Tech"
    }
  });

  console.log("✅ Admin et Technicien créés avec succès !");
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
