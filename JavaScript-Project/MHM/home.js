
if (sessionStorage.getItem('activeuser')){
  var isactive= JSON.parse(sessionStorage.getItem('activeuser'));
  if(isactive=="True"){
    li=document.createElement("li");
    li.innerHTML="<p style='font-size:20px;'>Hi, "+JSON.parse(sessionStorage.getItem('username'))+"</p>";
    document.getElementsByClassName("navbar-nav")[0].appendChild(li)
    li=document.createElement("li");
    a=document.createElement("a");
    a.innerHTML="Logout"
    a.style.cursor = "pointer";
    a.addEventListener('click', function() {
      sessionStorage.setItem('activeuser', JSON.stringify("False"));
      window.open("home.html","_self")
  });
  document.getElementsByClassName("dropdown-menu")[0].removeChild(document.getElementsByClassName("dropdown-menu")[0].lastChild);
  document.getElementsByClassName("dropdown-menu")[0].removeChild(document.getElementsByClassName("dropdown-menu")[0].lastChild);
  document.getElementsByClassName("dropdown-menu")[0].removeChild(document.getElementsByClassName("dropdown-menu")[0].lastChild);
  document.getElementsByClassName("dropdown-menu")[0].removeChild(document.getElementsByClassName("dropdown-menu")[0].lastChild);
  li.appendChild(a);
  document.getElementsByClassName("dropdown-menu")[0].appendChild(li)
  }
} 