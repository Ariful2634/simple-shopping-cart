const cart = () => {
    // console.log('click')
    const pro = document.getElementById('product');
    const quan = document.getElementById('quantity');
    const product = pro.value;
    const quantity = quan.value;
    pro.value = '';
    quan.value = '';
    // console.log(product,quantity)
    const set = document.getElementById('set');
    const li = document.createElement('li');
    li.innerText = `${product}: ${quantity}`
    console.log(li)
    set.appendChild(li)
    setStored(product, quantity)

}

// local Storage


const store = () => {
    let cart = {};
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        cart = JSON.parse(storedCart)
    }
    return cart;
}
store()

const setStored = (product, quantity) => {
    const cart = store();
    cart[product] = quantity;
    const cartString = JSON.stringify(cart);
    localStorage.setItem('cart', cartString)
}

const display=()=>{
    const get = store();
    for(const product in get){
        const quantity=get[product]
        console.log(product,quantity)
        const set = document.getElementById('set');
        const li = document.createElement('li');
        li.innerText = `${product}: ${quantity}`
        console.log(li)
        set.appendChild(li)
        setStored(product, quantity)
    }
}

display()

