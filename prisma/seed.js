/* eslint-disable @typescript-eslint/no-require-imports */
const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcryptjs");

const prisma = new PrismaClient();

const SITE_SETTINGS_ID = "default";

async function main() {
  console.log("Seeding database...");

  const hashedPassword = await bcrypt.hash("Admin@123", 12);

  const admin = await prisma.user.upsert({
    where:  { email: "admin@ghadipasa.com" },
    update: {},
    create: {
      name:          "Sanji Admin",
      email:         "admin@ghadipasa.com",
      password:      hashedPassword,
      role:          "ADMIN",
      emailVerified: new Date(),
    },
  });

  console.log("Admin created:", admin.email);

  const settings = await prisma.siteSettings.upsert({
    where:  { id: SITE_SETTINGS_ID },
    update: {},
    create: {
      id:              SITE_SETTINGS_ID,
      heroImages:      [],
      announcementBar: null,
      isStoreOpen:     true,
    },
  });

  console.log("Site settings initialized:", settings.id);
  console.log("Seeding complete. Categories and products deferred to admin panel.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });