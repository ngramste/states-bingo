<?php
  include '../php/conn.php';

  if(isset($_GET['uid']) && isset($_GET['name']))
  {
    $uid = htmlentities(str_replace('"', '', mysqli_real_escape_string($connection,$_GET['uid'])));     
    $name = htmlentities(str_replace('"', '', mysqli_real_escape_string($connection,$_GET['name'])));

    $sql = "UPDATE `tiles` SET `name` = '$name' WHERE `tiles`.`uid` = $uid";

    $result = mysqli_query($connection, $sql);
  }
  elseif (isset($_GET['add']) && $_GET['add'] == "true")
  {
    $name = htmlentities(mysqli_real_escape_string($connection,$_GET['name']));

    $sql = "INSERT INTO `tiles` (`uid`, `name`) VALUES (NULL, '$name')";

    $result = mysqli_query($connection, $sql);
  }
  elseif (isset($_GET['delete']) && $_GET['delete'] == "true")
  {
    $uid = htmlentities(mysqli_real_escape_string($connection,$_GET['uid']));

    $sql = "DELETE FROM `tiles` WHERE `tiles`.`uid` = $uid";

    $result = mysqli_query($connection, $sql);
    echo mysqli_error($connection);
  }
  

  $sql = "SELECT * FROM `tiles`";
  
  $result = mysqli_query($connection, $sql);

  echo "<div id=\"editor\">";
  echo "<a id=\"back\" class=\"w3-button w3-blue w3-hover-red\" href=\"/\">Back</a>";

  while($row = mysqli_fetch_array($result))
  {
    echo "  <input onchange=\"UpdateTable(".$row['uid'].")\" class=\"w3-input\" id=\"".$row['uid']."\" type=\"text\" value=\"". $row['name'] ."\">\n";
    echo "  <button class=\"editorButton w3-button w3-blue w3-hover-red\" onclick=\"DeleteTable(".$row['uid'].")\">Delete</button>\n";
  }
  echo "  <input class=\"w3-input\" id=\"add\" type=\"text\">\n";
  echo "  <button id=\"addButton\" class=\"w3-button w3-blue w3-hover-red\"  onclick=\"AddTable()\">Add</button>\n";
  
  echo "</div>";
?>
