// Input multiple object into an object.
const AddLocalStorageObject2 = (_id) => {

    let ShoppingCart = {};                                                    // declare , if find that replace data.

    let getCart = localStorage.getItem("ShoppingCart");                       // get data from local and check.

    if (getCart) {
        ShoppingCart = JSON.parse(getCart)                                    // if find , covert it. if we convert it earliar
    }                                                                         // and if it null, then "id" search give an error

    const quantity = ShoppingCart[_id];                                       // check if the id exist
    if (quantity) {
        ShoppingCart[_id] = ShoppingCart[_id] + 1                              // if exist then increase value.
    }
    else {
        ShoppingCart[_id] = 1;                                                       // if not , add a new one.
    }
    localStorage.setItem("ShoppingCart", JSON.stringify(ShoppingCart))
}


export { AddLocalStorageObject2 }