<!DOCTYPE HTML>
<html lang="en">
  <head>
    <?php include './php/head.php'; ?>
  </head>
  <body class="w3-theme-l4">  

    <div id="content">

    <button id="new" class="w3-button w3-blue w3-hover-red" onclick="newBoard()">New Board</button>

      <?php
        $cookie_name = "states-bingo-board";

        if(!isset($_COOKIE[$cookie_name])) 
        {    
          
          $tiles = [["Alabama", "off"], ["Alaska", "off"], ["Arizona", "off"], ["Arkansas", "off"], ["California", "off"], 
                    ["Colorado", "off"], ["Connecticut", "off"], ["Delaware", "off"], ["Florida", "off"], ["Georgia", "off"], 
                    ["Hawaii", "off"], ["Idaho", "off"], ["Illinois", "off"], ["Indiana", "off"], ["Iowa", "off"], ["Kansas", "off"], 
                    ["Kentucky", "off"], ["Louisiana", "off"], ["Maine", "off"], ["Maryland", "off"], ["Massachusetts", "off"], 
                    ["Michigan", "off"], ["Minnesota", "off"], ["Mississippi", "off"], ["Missouri", "off"], ["Montana", "off"], 
                    ["Nebraska", "off"], ["Nevada", "off"], ["New Hampshire", "off"], ["New Jersey", "off"], ["New Mexico", "off"], 
                    ["New York", "off"], ["North Carolina", "off"], ["North Dakota", "off"], ["Ohio", "off"], ["Oklahoma", "off"], 
                    ["Oregon", "off"], ["Pennsylvania", "off"], ["Rhode Island", "off"], ["South Carolina", "off"], ["South Dakota", "off"], 
                    ["Tennessee", "off"], ["Texas", "off"], ["Utah", "off"], ["Vermont", "off"], ["Virginia", "off"], ["Washington", "off"], 
                    ["West Virginia", "off"], ["Wisconsin", "off"], ["Wyoming", "off"]];
      
          shuffle($tiles);

          setcookie($cookie_name, json_encode($tiles), time() + (365 * 86400 * 30), "/"); // 86400 = 1 day
        }
        else
        {
          $tiles = json_decode($_COOKIE[$cookie_name]);
        }

        echo "<table id=\"card\">\n";
        echo "  <tr>\n";
        echo "    <th>S</th><th>T</th><th>A</th><th>T</th><th>E</th>\n";
        echo "  </tr>\n";

        for($row = 0; $row < 5; $row++)
        {
          echo "  <tr>\n";
          for($cell = 0; $cell < 5; $cell++)
          {
            if ($cell == 2 && $row == 2)
            {
              echo "    <td class=\"on\">FREE SPACE</td>\n";
            }
            else
            {
              echo "    <td id=" . ($row * 5 + $cell) . " class=\"". $tiles[$row * 5 + $cell][1] ."\" onclick=\"clickTile(" . ($row * 5 + $cell) . ")\">" . $tiles[$row * 5 + $cell][0] . "</td>\n";
            }
          }
          echo "  </tr>\n";
        }
        
        echo "</table>\n";

      ?>
    </div>

  </body>
</html>
