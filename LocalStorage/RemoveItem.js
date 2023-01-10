// Remove single item from the object.
const RemoveLocalStorageObject = (_id) => {

    let ShoppingCart = JSON.parse(localStorage.getItem("ShoppingCart"));

    if (ShoppingCart) {
        if (_id in ShoppingCart) {
            delete ShoppingCart[_id]
            localStorage.setItem("ShoppingCart", JSON.stringify(ShoppingCart))
        }
    }
}


export { RemoveLocalStorageObject }