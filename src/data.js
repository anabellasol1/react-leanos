/* API simulada */

const data = [
    {
        id: 1,
        name: "Sombras",
        price: 8000,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
        category: "Belleza",
        stock: 10
    },
    {
        id: 2,
        name: "Labial",
        price: 5000,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
        category: "Belleza",
        stock: 3
    },
    {
        id: 3,
        name: "Shampoo",
        price: 2500,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
        category: "Cuidado Personal",
        stock: 8
    },
    {
        id: 4,
        name: "Acondicionador",
        price: 2500,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
        category: "Cuidado Personal",
        stock: 6
    },
    {
        id: 5,
        name: "Agua Termal",
        price: 4000,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
        category: "Dermocosmética",
        stock: 5
    },
    {
        id: 6,
        name: "Crema Hidratante",
        price: 9000,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
        category: "Dermocosmética",
        stock: 2
    },
    {
        id: 7,
        name: "Snacks",
        price: 1500,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
        category: "Alimentos",
        stock: 4
    },
    {
        id: 8,
        name: "Barrita Cereal",
        price: 620,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
        category: "Alimentos",
        stock: 7
    },
    {
        id: 9,
        name: "Mermelada",
        price: 1200,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
        category: "Alimentos",
        stock: 9
    },
    {
        id: 10,
        name: "Mantequilla Maní",
        price: 1500,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
        category: "Alimentos",
        stock: 12
    },
    {
        id: 11,
        name: "Protector Solar",
        price: 7000,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
        category: "Dermocosmética",
        stock: 1
    },
    {
        id: 12,
        name: "Rubor",
        price: 14000,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
        category: "Belleza",
        stock: 4
    },
    {
        id: 13,
        name: "Rimmel",
        price: 8900,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
        category: "Belleza",
        stock: 5
    },
    {
        id: 14,
        name: "Pasta Dental",
        price: 1500,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
        category: "Cuidado Personal",
        stock: 9
    },
    {
        id: 15,
        name: "Desodorante",
        price: 2300,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
        category: "Cuidado Personal",
        stock: 3
    },
    {
        id: 16,
        name: "Autobronceante",
        price: 9600,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
        category: "Dermocosmética",
        stock: 8
    },

]

export const getData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            resolve(data)
        }, 2000)
    })
};

export const getItem = (itemId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            const newItem = data.filter((item) => item.id === itemId);
            if (newItem) {
                resolve(newItem)
                }
                else {
                    reject("No se encontró Producto");
                }
        }, 2000)
    })
};

export const getItemCategory = (categoryId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            const newCategory = data.filter((item) => item.category === categoryId);
            if (newCategory) {
                resolve(newCategory)
                }
                else {
                    reject("No se encontró item");
                }
        }, 2000)
    })
};