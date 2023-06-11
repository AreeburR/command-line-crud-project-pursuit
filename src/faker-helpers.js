const { faker } = require('@faker-js/faker');


const getClothingName = () => {
    return faker.commerce.productName();
}
const getClothingPrice = () => {
    return faker.commerce.price();
}
const getClothingInStock = () => {
    return faker.datatype.boolean(); 
}

module.exports = {
    getClothingName,
    getClothingPrice,
    getClothingInStock
}