<?php

switch ($_SERVER['HTTP_HOST']) {
case "24pt.tk":
    Header("Location: start.html");
exit;
  break;

case "prot.tk":
    Header("Location: 24points/start.html");
exit;
  break;

    default :
      Header("Location: start.html");
exit;
   break;
}
?>