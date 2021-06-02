function LoadTable()
{
  var xmlhttp;
  
  if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
  }
  else
  {// code for IE6, IE5
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.onreadystatechange=function()
  {
    if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
      document.getElementById("table").innerHTML=xmlhttp.responseText;
    }
  }
  
  xmlhttp.open("GET","table.php",true);
  xmlhttp.send();
}

function UpdateTable(uid)
{
  var xmlhttp;  
  
  if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
  }
  else
  {// code for IE6, IE5
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.onreadystatechange=function()
  {
    if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
      document.getElementById("table").innerHTML=xmlhttp.responseText;
    }
  }
  
  xmlhttp.open("GET","table.php?uid="+uid+"&name="+document.getElementById(uid).value,true);
  xmlhttp.send();
}

function AddTable()
{
  var xmlhttp;  
  
  if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
  }
  else
  {// code for IE6, IE5
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.onreadystatechange=function()
  {
    if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
      document.getElementById("table").innerHTML=xmlhttp.responseText;
    }
  }
  
  xmlhttp.open("GET","table.php?add=true&name="+document.getElementById('add').value,true);
  xmlhttp.send();
}

function DeleteTable(uid)
{
  name = document.getElementById(uid).value;
  if (window.confirm("Are you sure you want to delete \"" + name + "\"?"))
  {
    var xmlhttp;  
    
    if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
      xmlhttp=new XMLHttpRequest();
    }
    else
    {// code for IE6, IE5
      xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=function()
    {
      if (xmlhttp.readyState==4 && xmlhttp.status==200)
      {
        document.getElementById("table").innerHTML=xmlhttp.responseText;
      }
    }
    
    xmlhttp.open("GET","table.php?delete=true&uid="+uid);
    xmlhttp.send();
  }
}

LoadTable();
