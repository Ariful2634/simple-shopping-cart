const cart = () =>{
    // console.log('click')
    const pro = document.getElementById('product');
    const quan = document.getElementById('quantity');
    const product = pro.value;
    const quantity = quan.value;
    pro.value='';
    quan.value='';
    // console.log(product,quantity)
    const set = document.getElementById('set');
    const li = document.createElement('li');
    li.innerText=`${product}: ${quantity}`
    console.log(li)
    set.appendChild(li)

}