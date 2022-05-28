function Getdata() {
  var reqhttp = new XMLHttpRequest();
  reqhttp.open("GET", "https://fakestoreapi.com/products/", true);
  reqhttp.send();
  reqhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var dataconvert = JSON.parse(reqhttp.responseText);
      console.log(dataconvert);

      for (var i = 1; i <= 9; i++) {
        var title = dataconvert[i].title;
        var h = "title" + i;
        console.log(h);
        var a = document.getElementById(h);
        a.innerText = title;
        // console.log("title"+i);
        var d = dataconvert[i].image;
        var s = document.getElementById("img" + i);
        s.src = d;
        s.style.width = "200px";
      }
    }
  };
}
var CartItems=[];
if (!sessionStorage.getItem('cart')){
    sessionStorage.setItem('cart', JSON.stringify(CartItems));
} 

function addToCart(value){
    CartItems= JSON.parse(sessionStorage.getItem('cart'));
    CartItems.push(
        {   'value':value,
            'title':document.getElementById('title'+value).innerText,
            'price':document.getElementById('price'+value).innerText,
            'img':document.getElementById('img'+value).src
        }
    );
    CartItems.sort((a, b) =>  (a.title.length+parseInt(a.value))-(b.title.length+parseInt(b.value)) );
    sessionStorage.setItem('cart', JSON.stringify(CartItems));    
}

function buyNow(value){
  addToCart(value);
  window.open("cart.html","_self")
} 

