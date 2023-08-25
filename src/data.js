const data = [
    {
        id: 1,
        name: "Sombras",
        price: 8000,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
        category: "Belleza"
    },
    {
        id: 2,
        name: "Labial",
        price: 5000,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
        category: "Belleza"
    },
    {
        id: 3,
        name: "Shampoo",
        price: 2500,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
        category: "Cuidado Personal"
    },
    {
        id: 4,
        name: "Acondicionador",
        price: 2500,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
        category: "Cuidado Personal"
    },
    {
        id: 5,
        name: "Agua Termal",
        price: 4000,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
        category: "Dermocosmética"
    },
    {
        id: 6,
        name: "Crema Hidratante",
        price: 9000,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
        category: "Dermocosmética"
    },
    {
        id: 7,
        name: "Snacks",
        price: 1500,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
        category: "Alimentos"
    },
    {
        id: 8,
        name: "Barrita Cereal",
        price: 620,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
        category: "Alimentos"
    },
    {
        id: 9,
        name: "Mermelada",
        price: 1200,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
        category: "Alimentos"
    },
    {
        id: 10,
        name: "Mantequilla Maní",
        price: 1500,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
        category: "Alimentos"
    },
    {
        id: 11,
        name: "Protector Solar",
        price: 7000,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
        category: "Dermocosmética"
    },
    {
        id: 12,
        name: "Rubor",
        price: 14000,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
        category: "Belleza"
    },
    {
        id: 13,
        name: "Rimmel",
        price: 8900,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
        category: "Belleza"
    },
    {
        id: 14,
        name: "Pasta Dental",
        price: 1500,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
        category: "Cuidado Personal"
    },
    {
        id: 15,
        name: "Desodorante",
        price: 2300,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
        category: "Cuidado Personal"
    },
    {
        id: 16,
        name: "Autobronceante",
        price: 9600,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
        category: "Dermocosmética"
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