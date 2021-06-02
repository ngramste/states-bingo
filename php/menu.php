<nav class="w3-sidenav w3-collapse w3-theme-l1 w3-card-8 w3-animate-left" style="width:200px;" id="mySidenav">
  <a href="javascript:void(0)" onclick="w3_close()" class="w3-closenav w3-large w3-hide-large w3-hover-theme w3-large"><h4>Close &times;</h4></a>
  <a href="/" class="w3-hover-theme w3-large"><h4>Movies</h4></a>
  <a href="#" class="w3-hover-theme w3-large"><h4>Shows</h4></a>
  <a href="#" class="w3-hover-theme w3-large"><h4>Music</h4></a>
  <a href="/pictures.php" class="w3-hover-theme"><h4>Pictures</h4></a>
</nav>

<div class="w3-main" style="margin-left:200px">
<header class="w3-container w3-theme w3-margin-bottom">
    <span class="w3-opennav w3-xlarge w3-hide-large" onclick="w3_open()">&#9776;</span>
    <span><a href="/" style="text-decoration:none">
    <h1>FireNAS.net</h1>
  </a></span>
</header>

<script>
function w3_open() {
    document.getElementById("mySidenav").style.display = "block";
}
function w3_close() {
    document.getElementById("mySidenav").style.display = "none";
}
</script>
