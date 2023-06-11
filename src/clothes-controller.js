const { readJSONFile, writeJSONFile } = require("./helpers");
const {getClothingName, getClothingPrice, getClothingInStock} = require("./faker-helpers");
const { nanoid } = require("nanoid");

function create(clothes, clothesSize) {
    const clothing = { name: getClothingName(), 
        priceInCents: getClothingPrice(),
        inStock: getClothingInStock(),
        size: clothesSize,
        id: nanoid(4)
    };
    clothes.push(clothing);
    return clothes;
}

function index(clothes) {
    return clothes.map((clothing) => "id " + clothing.id + " name " + clothing.name + " priceInCents " + clothing.priceInCents + " inStock " + clothing.inStock + " size " + clothing.size).join("\n");
}

function show(clothes, clothingId) {
    const foundClothing = clothes.find((clothing) => clothing.id === clothingId);
    const {id, name, priceInCents, inStock, size} = foundClothing;
    return "id " + id + " name " + name + " priceInCents " + priceInCents + " inStock " + inStock + " size " + size;
}

function destroy(clothes, clothingId) {
   const index =  clothes.findIndex((clothing) => clothing.id === clothingId);
   if (index > -1) {
    clothes.splice(index, 1);
    console.log("clothing was deleted");
    return clothes;
   } else {
    console.log("clothing with that id could not be found");
   }
}

function update(clothes, clothingId, updatedClothingPrice, clothingInStock, clothingSize) {
    const index =  clothes.findIndex((clothing) => clothing.id === clothingId);
    if (index > -1) {
       clothes[index].id = clothingId;
       clothes[index].priceInCents = updatedClothingPrice;
       clothes[index].inStock = clothingInStock;
       clothes[index].size = clothingSize;
       console.log("clothing has been updated");
       return clothes;
   } else {
     console.log("clothing with that id could not be found");
    }
}

function addToCart(cart, clothes, clothingId) {
    const item = clothes.find((clothing) => clothing.id === clothingId);
    if(item) {
        cart.push(item);
    }
    return cart;
}

function cancelCart() {
    writeJSON("./data","cart-data.json",[]);
}


module.exports = {
   create,
   index, 
   show,
   destroy,
   update,
   addToCart,
   cancelCart
}