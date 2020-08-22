const productos = [


    { nombre: 'Steam Link', precio: 50 },
    { nombre: 'Steam Controller', precio: 59 },
    { nombre: 'Axion Verge', precio: 17 },
];

const mutations = {

    anadirProducto: (productos, producto) => productos.unshift(producto),
};
   

export default {

    state: productos,
    mutations,

};
