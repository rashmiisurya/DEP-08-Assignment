const products = [
    { id: 1, name: "Widget", price: 50, quantity: 120 },
    { id: 2, name: "Gadget", price: 30, quantity: 80 },
    { id: 3, name: "Doohickey", price: 100, quantity: 200 },
    { id: 4, name: "Thingamajig", price: 75, quantity: 90 }
];

const updatedprod = products.map(product=>{
    if(product.quantity>=100){
        return {...product, price: product.price * 0.9 }
    }
    return product;
});

const discountedprod = updatedprod.filter(product=>{
    return product.quantity>100;
});

discountedprod.forEach(product =>{
    console.log(`Product : ${product.name}, Price : ${product.price}`);
})