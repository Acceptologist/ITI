function Getdata() {
  var reqhttp = new XMLHttpRequest();
  reqhttp.open("GET", "https://fakestoreapi.com/products/", true);
  reqhttp.send();
  reqhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var dataconvert = JSON.parse(reqhttp.responseText);
      console.log(dataconvert);
      //1
      //   var title= dataconvert[1].title;
      //   console.log(title);
      //    console.log(title);
      //   document.getElementById("title1").innerText=title;
      //  var i=dataconvert[1].image;
      // var o= document.getElementById("img1")
      //  o.src= i;
      //  o.style.height="200px";

      ///////////////////////////////////////////////////////////////////////////
      //2

      //      var title= dataconvert[9].title;
      //      console.log(title);
      //       console.log(title);
      //      document.getElementById("title2").innerText=title;
      //     var m=dataconvert[9].image;
      //    var l= document.getElementById("img2")
      //     l.src= m;
      //     l.style.height="200px";
      ///////////////////////////////////////////////////////////
      //3
      //     var title= dataconvert[12].title;
      //     console.log(title);
      //      console.log(title);
      //     document.getElementById("title3").innerText=title;
      //    var q=dataconvert[12].image;
      //   var v= document.getElementById("img3")
      //    v.src= q;
      //    v.style.height="200px";
      ///////////////////////////////////////////////////////////
      //4
      // var title= dataconvert[6].title;
      // console.log(title);
      //  console.log(title);
      //  var i=4;
      //  var k=i;
      //document.getElementById("title"+{k}).innerText=title;
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
