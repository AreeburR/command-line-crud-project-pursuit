const { readJSONFile, writeJSONFile } = require("./src/helpers");
const { 
    create, 
    index,
    show,
    destroy,
    update,
    addToCart,
    cancelCart
} = require("./src/clothes-controller")


const run = () => {
    const action = process.argv[2];
    const clothing = process.argv[3];
    let clothes = readJSONFile("./data", "clothes-data.json");
    let cart = readJSONFile("./data", "cart-data.json");
    let writeToFile = false;
    let updatedClothes = [];
    let updatedCart = [];

    switch (action) {
        case "index" :
            const allClothes = index(clothes);
            console.log(allClothes);
            break;   
        case "create" :
            updatedClothes = create(clothes, clothing);
            writeToFile = true;
            break;
        case "show" :
            const foundClothing = show(clothes, clothing);
            console.log(foundClothing);
            break;  
        case "update" :
            console.log(clothing,  "is being updated");
            updatedClothes = update(clothes, clothing, process.argv[4], process.argv[5], process.argv[6]);
            writeToFile = true;
            break; 
        case "destroy" :
            updatedClothes = destroy(clothes, clothing);
            writeToFile = true;
            break ;  
        case "addToCart" :
            updatedCart = addToCart(cart, clothes, clothing)
            writeJSONFile("./data", "cart-data.json", updatedCart);
            break;
        case "cancelCart" :
            cancelCart();
            break;
        default :
        console.log("there was an error");
    }

    if (writeToFile) {
        console.log("updating data");
        writeJSONFile("./data", "clothes-data.json", updatedClothes);
    }

}

run();