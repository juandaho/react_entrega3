const products = [
  {
    id: 1,
    name: "Terapia Individual",
    price: 125,
    category: "Terapia",
    img: "https://images.unsplash.com/photo-1573497491208-6b1acb260507?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    stock: 11,
    description: "Terapia individual para adultos",
  },

  {
    id: 2,
    name: "Terapia de Pareja",
    price: 200,
    category: "Terapia",
    img: "https://images.unsplash.com/photo-1526052548799-60c6d6c666b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1926&q=80",
    stock: 11,
    description: "Terapia para Parejas",
  },

  {
    id: 3,
    name: "Terapia Familiar",
    price: 300,
    category: "Terapia",
    img: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
    stock:11,
    description: "Terapia para la Familia",
  },

  {
    id: 4,
    name: "Terapia para Niños",
    price: 125,
    category: "Terapia",
    img: "https://images.unsplash.com/photo-1527490087278-9c75be0b8052?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1734&q=80",
    stock: 10,
    description: "Terapia para Niños",
  },

  {
    id: 5,
    name: "Vivir Feliz",
    price: 200,
    category: "Cursos",
    img: "https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    stock: 10,
    description: "Cursos para vivir feliz",
  },
  {
    id: 6,
    name: "Maneja las emociones",
    price: 300,
    category: "Cursos",
    img: "https://images.unsplash.com/photo-1587483166702-bf9aa66bd791?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    stock: 2,
    description: "Cursos para manejar las emociones",
  },

  {
    id: 7,
    name: "Libro - Mente Sana",
    price: 25,
    category: "Libros",
    img: "https://images.unsplash.com/photo-1524502461691-79a021fc4567?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    stock: 21,
    description: "Libro para tener una mente sana",
  },
  {
    id: 8,
    name: "Libro para Parejas",
    price: 15,
    category: "Libros",
    img: "https://images.unsplash.com/photo-1459369510627-9efbee1e6051?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    stock: 11,
    description: "Libro para Parejas",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 600);
  });
};

export const getProductById = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const product = products.find((product) => product.id === parseInt(id));
      if (product) {
        resolve(product);
      } else {
        reject("No se encontró el producto");
      }
    }, 600);
  });
};

export const getProductsByCategory = (category) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const productsFiltered = products.filter(
        (product) => product.category === category
      );
      if (productsFiltered) {
        resolve(productsFiltered);
      } else {
        reject("No se encontraron productos");
      }
    }, 600);
  });
};
