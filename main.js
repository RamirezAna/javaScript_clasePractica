
/*seleccionamos la clase en donde tenemos el correo que es donde queremos que aparezca el menu pequeño*/
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');

const cardsContainer = document.querySelector('.cards-container');


menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleMenuCarrito);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

function toggleDesktopMenu(){
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isAsideClosed){
        shoppingCartContainer.classList.add('inactive');
    } 
    
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isAsideClosed){
        shoppingCartContainer.classList.add('inactive');
    }

    closeProductDetailAside();/*para cerrar todo y que el menu se quede abierto*/

    mobileMenu.classList.toggle('inactive');
}

function toggleMenuCarrito(){     
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    //aside.classList.toggle('inactive');
     if (!isMobileMenuClosed){
      mobileMenu.classList.add('inactive');
     }
     /* -------------------------------*/
     const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

     //aside.classList.toggle('inactive');
      if (!isProductDetailClosed){
        productDetailContainer.classList.add('inactive');
      } 

    shoppingCartContainer.classList.toggle('inactive');
}


const productList =[];

productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Pantalla',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Radio',
    price: 780,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Lapiz',
    price: 780,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
/*
<div class="product-card">
<img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
<div class="product-info">
  <div>
    <p>$120,00</p>
    <p>Bike</p>
  </div>
  <figure>
    <img src="./icons/bt_add_to_cart.svg" alt="">
  </figure>
</div>
</div>
*/

function renderProducts(arr){
    for (product of arr){  
        const productCard = document.createElement('div');  /*Crear elementos de html desde javaScript */
        productCard.classList.add('product-card');   /*Agregamos nombre de la clase a nuestro elemento creado*/
     
        const productImg = document.createElement('img');   
        productImg.setAttribute('src',product.image);
        productImg.addEventListener('click', openProductDetailAside);/*para que abra nuestro imagen al dale click*/
        // product = {name, price, image} -> product.image
     
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
     
        const productInfoDiv = document.createElement('div');
     
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price; /*añadir texto dentro de un elemento parrafo */
        const productName = document.createElement('p');
        productName.innerText = product.name;
     
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
     
        const productInfoFigure = document.createElement('figure');
        
        const productImgCart = document.createElement('img');   
        productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg');
     
         /*los elementos hijos deben ser añadidos a los elementos padres ejemplo: productInfoFigure.appendChild(productImgCart); se 
         hace para cada elemento creado para que pueda ser utilizado*/
        productInfoFigure.appendChild(productImgCart);
     
     
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
     
        
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
     
        cardsContainer.appendChild(productCard);
     }
}

renderProducts(productList);

/*para poder abrir la imagen de al dar click en la imagen*/
function openProductDetailAside(){

    shoppingCartContainer.classList.add('inactive');/*para poder abrir el carrito, que cierre todo y deje abierto el carrito*/

    productDetailContainer.classList.remove('inactive');/*saca la clase inactive, para que ya no este inactivo, y se puede visualizar*/
}

/*agregar la clase inactive, para que se cierre la ventana de detalle producto*/
function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive');/*se le agrega para que el elemento este inactivo*/
}


