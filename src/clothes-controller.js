const { nanoid } = require("nanoid");


function create (clothes, clothesName, clothesPriceInCents, clothesInStock, clothesSize) {
    const clothing = { name: clothesName, 
        priceInCents: clothesPriceInCents,
        inStock:  clothesInStock,
        size: clothesSize,
        id: nanoid(4)
    };
    clothes.push(clothing);
    return clothes;
}

function index (clothes) {
    return clothes.map((clothing) => "id " + clothing.id + "name " + clothing.name + "priceInCents " + clothing.priceInCents + "inStock " + clothing.InStock + "size " + clothing.size).join("\n");
}

function show (clothes, clothingId) {
    const foundClothing = clothes.find((clothing) => clothing.id === clothingId) ;
    return "id " + foundClothing.id + "name " + foundClothing.name + "priceInCents " + foundClothing.priceInCents + "inStock " + foundClothing.inStock + "size " + foundClothing.size;
}

function destroy (clothes, clothingId) {
   const index =  clothes.findIndex((clothing) => clothing.id === clothingId);
   if (index > -1) {
    clothes.splice(index, 1);
    console.log("clothing was deleted");
    return clothes;
   } else {
    console.log("clothing with that id could not be found");
   }
}

function update (clothes, clothingId, updatedClothing, updatedClothingPrice, clothingInStock, clothingSize) {
    const index =  clothes.findIndex((clothing) => clothing.id === clothingId);
    if (index > -1) {
       clothes[index].id = clothingId;
       clothes[index].name = updatedClothing;
       clothes[index].priceInCents = updatedClothingPrice;
       clothes[index].inStock = clothingInStock;
       clothes[index].size = clothingSize;
       console.log("clothing has been updated");
       return clothes;
   } else {
     console.log("clothing with that id could not be found");
    }
   
}


module.exports = {
   create,
   index, 
   show,
   destroy,
   update
}