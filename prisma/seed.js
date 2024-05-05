const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
  await prisma.creator.create({
    data: {
      name: "Carlos Perez",
      email: "cmperez0730@gmail.com",
      password: "Gonzales2024",
      phone: "8317441452",
      social: "Carlos Perez"
    }
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })