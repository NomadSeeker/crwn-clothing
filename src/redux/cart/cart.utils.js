export const addItemToCart = (cartItems, cartItemToAdd) =>{
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);

    if(existingCartItem){
        return cartItems.map(
            //si el nuevo cart item es igual a alguno de las lista ya existente agrega 1 al quantity, sino returna el cartitems
            cartItem => cartItem.id === cartItemToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1}
            : cartItem
            );
    }
    //Si el nuevo item no existe dentro del arreglo de items lo agrega y le asigna quantity 1
    return [...cartItems, {...cartItemToAdd, quantity: 1}];
} ;