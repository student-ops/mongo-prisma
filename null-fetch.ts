import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
    await prisma.$connect()
    async function main() {
        // Connect the client
        await prisma.$connect()
        // ... you will write your Prisma Client queries here
        const allUsers = await prisma.user.findMany()
        console.log(allUsers)
    }

    const allUsers = await prisma.user.findMany({
        include: {
            posts: true,
        },
    })
    console.dir(allUsers, { depth: null })
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
