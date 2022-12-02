<?php
if (isset($_POST["notificacion"]) and isset($_POST["titulo"]))
	{
	sendpushover($_POST["titulo"],$_POST["notificacion"]);
	}

function sendpushover($titulo, $mensaje)
	{
$userKey = "uwefcf26bvuo6hrrmrdj1fisw4hn6o";
$appToken="ajj9o7w35e81s4ducdugus85ubmtji";

curl_setopt_array($ch = curl_init(), array(
  CURLOPT_URL => "https://api.pushover.net/1/messages.json",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_POSTFIELDS => array(
		"token" => $appToken,
		"user" => $userKey,
		"message" => $mensaje,
		"device" => "Pixel2XL",
		"title" => $titulo,
		"priority" => 1,
   )));
		$resultado = curl_exec($ch);
		curl_close($ch);
		echo $resultado."\n";
	}
