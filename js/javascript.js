var cookie_name = "states-bingo-board";

function getCookie(cname) 
{
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function clickTile(tile)
{
  var d = new Date();
  d.setTime(d.getTime() + (365*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();

  value = document.getElementById(tile).attributes.class.value;
  
  var cookie = JSON.parse(decodeURIComponent(getCookie(cookie_name)));
  
  if (value == "on")
  {
    document.getElementById(tile).setAttribute("class", "off");
    cookie[tile][1] = "off";
  }
  else
  {
    document.getElementById(tile).setAttribute("class", "on");
    cookie[tile][1] = "on";
  }

  document.cookie = cookie_name+"="+JSON.stringify(cookie)+"; "+expires+"; path=/";
  
  console.log(document.cookie);
}

function newBoard()
{
  if (window.confirm("Are you sure you want a new board?"))
  {
    document.cookie = cookie_name+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    location.reload();
  }
}
