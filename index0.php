<<<<<<< .mine
<?php

//get the q parameter from URL
$q=$_GET["q"];


$mysql = new SaeMysql();



if("allRank"==($q)){
    
    $sql = "select DISTINCT score from rank ORDER BY score DESC LIMIT 0, 6000";
    $data = $mysql->getData( $sql );


if ($mysql->errno() != 0)
{
    die("Error:" . $mysql->errmsg());
}

    //output the response
    
    // echo intval( $data[0] );
  
       //   print_r(each($data[1]));
echo '[';
    foreach ($data as $color){
     echo $color["score"];
        echo ',';
}
echo '0';
echo ']';
    
}
else{
    
$sql = "INSERT  INTO `rank` (`score`) VALUES ( '" . intval( $q ) . "') ";
$mysql->runSql($sql);
if ($mysql->errno() != 0)
{
    die("Error:" . $mysql->errmsg());
}
    //output the response
    echo 'success!';
    
}

$mysql->closeDb();



=======
<?php

//get the q parameter from URL
$q=$_GET["q"];


$mysql = new SaeMysql();



if("allRank"==($q)){
    
    $sql = "select DISTINCT score from rank ORDER BY score DESC LIMIT 0, 6000";
    $data = $mysql->getData( $sql );


if ($mysql->errno() != 0)
{
    die("Error:" . $mysql->errmsg());
}

    //output the response
    
    // echo intval( $data[0] );
  
       //   print_r(each($data[1]));
echo '[';
    foreach ($data as $color){
     echo $color["score"];
        echo ',';
}
echo '0';
echo ']';
    
}
else{
    
$sql = "INSERT  INTO `rank` (`score`) VALUES ( '" . intval( $q ) . "') ";
$mysql->runSql($sql);
if ($mysql->errno() != 0)
{
    die("Error:" . $mysql->errmsg());
}
    //output the response
    echo 'success!';
    
}

$mysql->closeDb();



>>>>>>> .r166
