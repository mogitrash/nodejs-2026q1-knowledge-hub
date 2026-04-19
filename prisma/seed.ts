import 'dotenv/config';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient, $Enums } from '../generated/prisma/client';
import * as bcrypt from 'bcrypt';

const databaseUrl = process.env['DATABASE_URL'];
const cryptSalt = Number(process.env['CRYPT_SALT']);

if (!databaseUrl) {
  throw new Error('DATABASE_URL is not defined');
}

const prisma = new PrismaClient({
  adapter: new PrismaPg({ connectionString: databaseUrl }),
});

async function main() {
  const now = BigInt(Date.now());
  const [adminPassword, editorPassword] = await Promise.all([
    bcrypt.hash('admin123', cryptSalt),
    bcrypt.hash('editor123', cryptSalt),
  ]);

  await prisma.comment.deleteMany();
  await prisma.article.deleteMany();
  await prisma.category.deleteMany();
  await prisma.user.deleteMany();
  await prisma.tag.deleteMany();

  const admin = await prisma.user.create({
    data: {
      login: 'admin',
      password: adminPassword,
      role: $Enums.UserRole.ADMIN,
      createdAt: now,
      updatedAt: now,
    },
  });

  const editor = await prisma.user.create({
    data: {
      login: 'editor',
      password: editorPassword,
      role: $Enums.UserRole.EDITOR,
      createdAt: now,
      updatedAt: now,
    },
  });

  const [backend, devops, testing] = await Promise.all([
    prisma.category.create({
      data: { name: 'Backend', description: 'Backend development articles' },
    }),
    prisma.category.create({
      data: { name: 'DevOps', description: 'DevOps and deployment notes' },
    }),
    prisma.category.create({
      data: { name: 'Testing', description: 'Testing related guides' },
    }),
  ]);

  await prisma.tag.createMany({
    data: [
      { name: 'nestjs' },
      { name: 'prisma' },
      { name: 'postgres' },
      { name: 'docker' },
      { name: 'testing' },
    ],
    skipDuplicates: true,
  });

  const article1 = await prisma.article.create({
    data: {
      title: 'NestJS and Prisma quickstart',
      content: 'Simple guide to wire Prisma in NestJS.',
      status: $Enums.ArticleStatus.PUBLISHED,
      authorId: admin.id,
      categoryId: backend.id,
      createdAt: now,
      updatedAt: now,
      tags: {
        connect: [{ name: 'nestjs' }, { name: 'prisma' }, { name: 'postgres' }],
      },
    },
  });

  const article2 = await prisma.article.create({
    data: {
      title: 'Docker tips for local development',
      content: 'How to run app and db together with compose.',
      status: $Enums.ArticleStatus.DRAFT,
      authorId: editor.id,
      categoryId: devops.id,
      createdAt: now,
      updatedAt: now,
      tags: {
        connect: [{ name: 'docker' }, { name: 'postgres' }],
      },
    },
  });

  const article3 = await prisma.article.create({
    data: {
      title: 'Testing API endpoints',
      content: 'E2E test setup for controllers and services.',
      status: $Enums.ArticleStatus.ARCHIVED,
      authorId: admin.id,
      categoryId: testing.id,
      createdAt: now,
      updatedAt: now,
      tags: {
        connect: [{ name: 'testing' }, { name: 'nestjs' }],
      },
    },
  });

  await prisma.comment.createMany({
    data: [
      {
        content: 'Great introduction!',
        articleId: article1.id,
        authorId: editor.id,
        createdAt: now,
      },
      {
        content: 'Please add more docker examples.',
        articleId: article2.id,
        authorId: admin.id,
        createdAt: now,
      },
      {
        content: 'This testing guide helped a lot.',
        articleId: article3.id,
        authorId: editor.id,
        createdAt: now,
      },
    ],
  });

  console.log('Seed completed.');
}

main()
  .catch((error) => {
    console.error('Seed failed:', error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
