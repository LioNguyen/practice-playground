import { PrismaClient } from "@prisma/client";
import log from "./utils/logger";

const prisma = new PrismaClient();

async function main() {
  // ... you will write your Prisma Client queries here
  // const author = await prisma.author.create({
  //   data: {
  //     name: "Lio",
  //   },
  // });

  // log.info(author);

  // const post = await prisma.post.create({
  //   data: {
  //     title: "My first post",
  //     body: "My first post body",
  //     author: {
  //       connect: {
  //         id: "65bf77d49564a6efd9ade9b9",
  //       },
  //     },
  //   },
  // });

  // log.info(post);

  const posts = await prisma.post.findMany({
    include: {
      author: true,
    },
  });
  log.info(posts);
}

main()
  .catch(async (e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
