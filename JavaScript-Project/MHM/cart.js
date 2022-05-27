var CartItems=[];
CartItems= JSON.parse(sessionStorage.getItem('cart'));

if(CartItems.length==0){
    img=document.createElement('img');
    img.src="images/emptycart.svg";
    img.style.height='30rem';
    img.style.width='100%';
    document.getElementById('heading-cart').innerHTML='Your cart is <span>empty</span>'
    document.getElementById('row').appendChild(img);
    div=document.createElement('div');
    div.classList.add('btn-box');
    a=document.createElement('a');
    a.innerText='START SHOPPING';
    a.setAttribute('href','product.html')
    div.appendChild(a)
    document.getElementById('row').appendChild(div)
}else {
    var TotalPrice=0;
    var c=0;
    TotalPriceEle=document.createElement('div');
    TotalPriceEle.classList.add('totalprice');
    TotalPriceEle.setAttribute('id','totalprice')
    document.getElementById('row').appendChild(TotalPriceEle);

    //    Shopping Cart

    for(var i=0;i<CartItems.length;i++){
        if(CartItems[i+1] && CartItems[i]['img']== CartItems[i+1]['img']){
            c+=1;
            TotalPrice+=parseInt(CartItems[i].price.substring(1));
            continue;
        }
        else{

   
            //.setAttribute(‘id’, ‘Introduction_ 1’)
        TotalPrice+=parseInt(CartItems[i].price.substring(1));
        MainDiv=document.createElement('div');
        MainDiv.classList.add('col-sm-6');
        MainDiv.classList.add('col-md-4');
        MainDiv.classList.add('col-lg-4');
        box=document.createElement('div');
        box.classList.add('box');
        detailBox=document.createElement('div');
        detailBox.classList.add('detail-box');
        title=document.createElement('h5');
        title.innerText=CartItems[i]['title'];
        price=document.createElement('h6');
        price.innerText=CartItems[i]['price'];
        img=document.createElement('img');
        img.classList.add('img-box');
        img.src=CartItems[i]['img'];
        quantity=document.createElement('h6');
        quantity.classList.add('quantity');
        quantity.innerText="Qty : "+(c+1);
        console.log(CartItems[i]['img']);
        detailBox.appendChild(title);
        detailBox.appendChild(price);
        box.appendChild(detailBox);
        box.appendChild(img);
        box.appendChild(quantity);
        MainDiv.appendChild(box);
        document.getElementById('row').appendChild(MainDiv);
           
    } 
    c=0;
}

document.getElementById('totalprice').innerHTML="<h2>Subtotal (<span class='items-number'>"+CartItems.length+" items</span>): $"+TotalPrice+"</h2>";

/*
 <div class="btn-box">
               <a href="product.html">
               View All products
               </a>
            </div>
*/
div=document.createElement('div');
div.classList.add('btn-box');
a=document.createElement('a');
a.setAttribute('id', 'bay')
a.innerText='Buy';
div.appendChild(a)
document.getElementById('row').appendChild(div)

}

//Subtotal (2 items):