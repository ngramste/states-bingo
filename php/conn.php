<?php
  $connection=mysqli_connect("firenas.net","bingo","YwfDQpre7L2Fo4","bingo");

  // Check connection
  if (mysqli_connect_errno())
  {
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }

  mysqli_set_charset($connection,"utf8");
?>
