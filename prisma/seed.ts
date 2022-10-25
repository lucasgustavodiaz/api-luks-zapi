import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  // Prisma create query to seed models in database
  await prisma.role.createMany({
    data: [{ role: 'admin' }, { role: 'user' }],
  });

  await prisma.category.createMany({
    data: [
      {
        category: 'Pizzas',
        imgTag: 'assets/tag_pizza.jpeg',
      },
      {
        category: 'Burgers',
        imgTag: 'assets/tag_burger.jpeg',
      },
      {
        category: 'Sambuchitos',
        imgTag: 'assets/tag_sambu.jpeg',
      },
    ],
  });

  await prisma.products.createMany({
    data: [
      {
        name: 'Pizza Tranca',
        imgUrl: '/assets/pizza1.jpg',
        categoryId: 1,
        description:
          'Pizza casera a la piedra, muzzarella, jamón, morrón asado, huevo.',
        price: 100,
      },
      {
        name: 'Pizza Mix',
        imgUrl: '/assets/pizza2.jpg',
        categoryId: 1,
        description:
          'Pizza casera a la piedra, muzzarella, jamón, morrón asado, huevo.',
        price: 100,
      },
      {
        name: 'Pizza Zaa',
        imgUrl: '/assets/pizza2.jpg',
        categoryId: 1,
        description:
          'Pizza casera a la piedra, muzzarella, jamón, morrón asado, huevo.',
        price: 100,
      },
      {
        name: 'Burger Zarpada',
        imgUrl: '/assets/burger1.jpg',
        categoryId: 2,
        description:
          'Hamburguesa de asado de 180g, mostaza dulce, cebolla caramelizada, cheddar, aros de cebolla, papas fritas.',
        price: 100,
      },
      {
        name: 'Burger en la pera',
        imgUrl: '/assets/burger2.jpg',
        categoryId: 2,
        description:
          'Hamburguesa de asado de 180g, mostaza dulce, cebolla caramelizada, cheddar, aros de cebolla, papas fritas.',
        price: 100,
      },
      {
        name: 'Burger Cheta',
        imgUrl: '/assets/burger1.jpg',
        categoryId: 2,
        description:
          'Hamburguesa de asado de 180g, mostaza dulce, cebolla caramelizada, cheddar, aros de cebolla, papas fritas.',
        price: 100,
      },
      {
        name: 'Sambuchito 1',
        imgUrl: '/assets/sanbu1.jpg',
        categoryId: 3,
        description:
          'Sándwich de milanesa carne o pollo lechuga, tomate, jamón, queso, huevo frito; con papas fritas.',
        price: 100,
      },
      {
        name: 'Sambuchito 2',
        imgUrl: '/assets/sanbu2.jpg',
        categoryId: 3,
        description:
          'Sándwich de milanesa carne o pollo lechuga, tomate, jamón, queso, huevo frito; con papas fritas.',
        price: 100,
      },
      {
        name: 'Sambuchito 1',
        imgUrl: '/assets/sanbu1.jpg',
        categoryId: 3,
        description:
          'Sándwich de milanesa carne o pollo lechuga, tomate, jamón, queso, huevo frito; con papas fritas.',
        price: 100,
      },
    ],
  });

  await prisma.states.createMany({
    data: [
      {
        state: 'active',
      },
      {
        state: 'pending',
      },
      {
        state: 'cancelled',
      },
      {
        state: 'disabled',
      },
      {
        state: 'approved',
      },
      {
        state: 'rejected',
      },
    ],
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
