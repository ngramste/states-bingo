let cookie_name = "states-bingo-board";
let tiles = [["See the traveling cross", "off"], ["Eat Free Corn", "off"], ["Bike Before Sunrise", "off"], ["Bike After Sunset", "off"], ["Receive USAF Support", "off"], ["Hate and Love RAGBRAI Within 15 Minutes", "off"], ["Sleep in a Ditch", "off"], ["See Nudity", "off"], ["Ride the Sag", "off"], ["Eat Pie", "off"], ["Go of Route", "off"], ["Tent Problems", "off"], ["Shower in Semi", "off"], ["Pet a Farm Animal", "off"], ["Pee in Cornfield", "off"], ["KYBO out of TP", "off"], ["Get Beekman's", "off"], ["Get Mr. Porkchop", "off"], ["Saddle Sore", "off"], ["Pancake Breakfast", "off"], ["Get Team Buzzkill Bracelet", "off"], ["Go to Concert", "off"], ["Slip and Slide!", "off"], ["Spot Pennyfarthing", "off"], ["Bike in the Rain", "off"], ["Plant Seed Pod", "off"], ["Get Free Coozie", "off"], ["Spot Someone you Know", "off"], ["Eat Local", "off"], ["Ride Gravel Route", "off"], ["Bike all Hills", "off"], ["Add Bike Decoration", "off"]];

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return JSON.parse(c.substring(name.length, c.length));
    }
  }
  return "";
}

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + encodeURIComponent(JSON.stringify(cvalue)) + ";" + expires + ";path=/";
}

function deleteCookie(cname) {
  document.cookie = cname + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

function clickTile(tile) {
  let d = new Date();
  d.setTime(d.getTime() + (365 * 24 * 60 * 60 * 1000));
  let expires = "expires=" + d.toUTCString();

  let value = document.getElementById(tile).attributes.class.value;

  let cookie = getCookie(cookie_name);

  if (value == "on") {
    document.getElementById(tile).setAttribute("class", "off");
    cookie[tile][1] = "off";
  }
  else {
    document.getElementById(tile).setAttribute("class", "on");
    cookie[tile][1] = "on";
  }

  setCookie(cookie_name, cookie, 1000);
}

/**
 * Shuffles array in place.
 * @param {Array} a items An array containing the items.
 */
function shuffle(a) {
  let j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}

function newBoard() {
  if (window.confirm("Are you sure you want a new board?")) {
    deleteCookie(cookie_name);
    location.reload();
  }
}

function loadBoard() {
  let html = document.getElementById('card').innerHTML;

  for (let row = 0; row < 5; row++) {
    html += "  <tr>\n";
    for (let col = 0; col < 5; col++) {
      if (col == 2 && row == 2)
      {
        html += "    <td class=\"on\">FREE SPACE</td>\n";
      }
      else
      {
        html += "    <td id=" + (row * 5 + col) + " class=\"" + tiles[row * 5 + col][1] + "\" onclick=\"clickTile(" + (row * 5 + col) + ")\">" + tiles[row * 5 + col][0] + "</td>\n";
      }
    }
    html += "  </tr>\n";
  }

  document.getElementById('card').innerHTML = html;
}

function onLoad() {
  let board = getCookie(cookie_name);
  if (board == '') {
    tiles = shuffle(tiles);
    setCookie(cookie_name, tiles, 1000);
  } else {
    tiles = board;
  }

  loadBoard();
}

document.addEventListener("DOMContentLoaded", function () {
  onLoad();
});
