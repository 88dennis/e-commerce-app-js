const cartBtn = document.querySelector('.cart-btn');
const closeCartBtn = document.querySelector('.close-cart');
const clearCartBtn = document.querySelector('.clear-cart');
const cartDOM = document.querySelector('.cart');
const cartOverlay = document.querySelector('.cart-overlay');
const cartItems = document.querySelector('.cart-items');
const cartTotal = document.querySelector('.cart-total');
const cartContent = document.querySelector('.cart-content');
const productsDOM = document.querySelector('.products-center');

// cart
let cart = [];

//getting products
class Products{
   async getProducts(){
       try {
        let result = await fetch('products.json');
        let data = await result.json();
        // return data;

        let products = data.items;
        
        //DESTRUCTURING THE FILE THAT CAME FROM THE JSON OBJECT
        //CREATING AN OBJECT BY REFERENCING AND DESTRUCTURING THE DATA RESPONSE AND PLACING IT INTO A NEW ARRAY
        products = products.map(item => {
            const {title, price} = item.fields;
            const {id} = item.sys;
            const image = item.fields.image.fields.file.url;
            //THIS RETURNS A NEW OBJECT FOR EVERY ITEM
            return {title, price, id, image}
        });
        //THIS RETURNS A NEW ARRAY
        return products;

       } catch(error){
        console.log(error);
       }
    }
}

//display products
class UI {

}

//local storage
class Storage {

}

document.addEventListener("DOMContentLoaded", ()=>{
    const ui = new UI();
    const products = new Products();

    //get all products
    products.getProducts().then(products => console.log(products));

})

















