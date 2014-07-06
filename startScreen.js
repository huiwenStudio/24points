var patterns0 = new Array(1, 1, 1, 2, 2, 1, 1, 3, 3, 3, 8, 24);
var patterns = new Array();
var buttonid = new Array();
var numbercurse = 0;
var opercurse = 0;
var users;
var user;
var myArray
var pass = 1, score = 0;
var next = 0;
var timer, timename1, timename2;

var hide = new Array();
var type = false;
window.onload = function load() {

	var array = [];
	for (var i = 0; i < 1361; i++) {
		array[i] = i;
	}
	for (var i = 0; i < 1361; i++) {
		var rand = parseInt(1361 * Math.random());
		var temp = array[i];
		array[i] = array[rand];
		array[rand] = temp;
	}

	sessionStorage.formData = JSON.stringify(array);
	GetJSON();
	sessionStorage.flag = 1;
}


function function1() {
	var upload = confirm("时间到!" + "  " + "上传分数否?"+ "\n" +"可以看到你的排名哟！");
	clearInterval(timename2);
	clearTimeout(timename1);
	if (upload) {
		localStorage.score = score;
		sessionStorage.flag = 1;
		window.location.href = "rank.html"
	} else {
		location.reload();
	}
}

function function2() {
	timer = timer - 1;
	$("#timer").html(timer);
}

function GetJSON() {

	var xmlHttp = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHttp");

	xmlHttp.open("get", "res/pot24.json?random=" + Math.random(), true);

	xmlHttp.onreadystatechange = function() {
		if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
			var result = xmlHttp.responseText;

			localStorage.setItem("result", result);
		}
	}

	xmlHttp.send();

}

function getRank() {

  	$.ajax({
  		type : "post", //请求方式
  		url : "index0.php?q=allRank", //发送请求地址
  		timeout : 30000, //超时时间：30秒
  		dataType : "json", //设置返回数据的格式
  		//请求成功后的回调函数 data为json格式
  		success : function(data) {
  			localStorage.setItem("Rank", data);
  		},
  		//请求出错的处理
  		error : function() {
  			alert("error");
  		}
  	});

}
function autoPlay(){
	var myAuto =document.getElementById("myaudio");
	myAuto.play();
	}
function start() {

	if (timename2 != "") {
		clearInterval(timename2);
	}
	if (timename1 != "") {
		clearTimeout(timename1);
	}
if(type){
	timename1 = setTimeout("function1();", 25000);
	timename2 = setInterval("function2();", 1000);

}
	
	result = localStorage.getItem("result");

	users = eval("(" + result + ")");

	myArray = JSON.parse(sessionStorage.formData);
	user = users[myArray[pass-1]];
	$("#innum1").html(user[1]);
	$("#innum2").html(user[2]);
	$("#innum3").html(user[3]);
	$("#innum4").html(user[4]);
	$("#pass").html(pass);
	$("#score").html(score);
	switch (user[5]) {
		case 1:
			$("#star1").show();
			$("#star2").show();
			$("#star3").show();
			$("#star4").show();
			$("#star5").show();
			$("#star2").hide();
			$("#star3").hide();
			$("#star4").hide();
			$("#star5").hide();
			break;
		case 2:
			$("#star1").show();
			$("#star2").show();
			$("#star3").show();
			$("#star4").show();
			$("#star5").show();
			$("#star3").hide();
			$("#star4").hide();
			$("#star5").hide();
			break;
		case 3:
			$("#star1").show();
			$("#star2").show();
			$("#star3").show();
			$("#star4").show();
			$("#star5").show();
			$("#star4").hide();
			$("#star5").hide();
			break;
		case 4:
			$("#star1").show();
			$("#star2").show();
			$("#star3").show();
			$("#star4").show();
			$("#star5").show();
			$("#star5").hide();
			break;
		case 5:
			$("#star1").show();
			$("#star2").show();
			$("#star3").show();
			$("#star4").show();
			$("#star5").show();
			break;
	}
	$("#poker1").attr("src", "img/a" + user[1] + ".png");
	$("#poker2").attr("src", "img/b" + user[2] + ".png");
	$("#poker3").attr("src", "img/c" + user[3] + ".png");
	$("#poker4").attr("src", "img/d" + user[4] + ".png");
}

function nextpass() {
	score = score + user[5];
	pass++;
	next = 1;
	
	if(pass==1361){
	var upload1 = confirm("牛逼，你已经通关了." + "\n" + "上传分数否?");
	clearInterval(timename2);
	clearTimeout(timename1);
	if (upload1) {
		localStorage.score = score;
		sessionStorage.flag = 1;
		window.location.href = "rank.html"
	} else {
		location.reload();
	}
	}

}

function init() {
	patterns = new Array();
	numbercurse = 0;
	opercurse = 0;
	$("#innum1").html(user[1]);
	$("#innum2").html(user[2]);
	$("#innum3").html(user[3]);
	$("#innum4").html(user[4]);
	$("#innum1").show();
	$("#innum2").show();
	$("#innum3").show();
	$("#innum4").show();
	$("#number1").html("&nbsp");
	$("#number2").html("&nbsp");
	$("#number3").html("&nbsp");
	$("#number4").html("&nbsp");
	$("#number5").html("&nbsp");
	$("#number6").html("&nbsp");
	$("#oper1").html("&nbsp");
	$("#oper2").html("&nbsp");
	$("#oper3").html("&nbsp");
	$("#answer1").html("?");
	$("#answer2").html("?");
	$("#answer3").html("?");

}

function clickpoker1() {
	if (sessionStorage.flag  == 1) {

		
		timer = 24;
		$("#timer").html(timer);
	
		type=  confirm("挑战开始，是否计时？"+"\n"+"计时可以查看排名哟。");
		if(type)
			{
	           getRank();
			}
		start();
		sessionStorage.flag = 2;
	} else if (sessionStorage.flag == 2) {
		if(next==0)
		init();
	}
}

function clickpoker2() {
	if (sessionStorage.flag == 1) {
	
		timer = 24;
		$("#timer").html(timer);
		
		type=  confirm("挑战开始，是否计时？"+"\n"+"计时可以查看排名哟。");
		if(type)
			{
	           getRank();
			}
		start();
		sessionStorage.flag = 2;
	} else if (sessionStorage.flag == 2) {
		if(next==0)
		init();
	}
}

function clickpoker3() {
	if (sessionStorage.flag == 1) {
		
		timer = 24;
		$("#timer").html(timer);
	
		type=  confirm("挑战开始，是否计时？"+"\n"+"计时可以查看排名哟。");
		if(type)
			{
	           getRank();
			}
		start();
		sessionStorage.flag = 2;
	} else if (sessionStorage.flag == 2) {
		if(next==0)
		init();
	}
}

function clickpoker4() {
	if (sessionStorage.flag == 1) {
	
		timer = 24;
		$("#timer").html(timer);
	
		type=  confirm("挑战开始，是否计时？"+"\n"+"计时可以查看排名哟。");
		if(type)
			{
	           getRank();
			}
		start();
		sessionStorage.flag = 2;
	} else if (sessionStorage.flag == 2) {
		if(next==0)
		init();
	}
}

function clicknumber1() {

	if ( next == 0) {
		numbercurse = 0;
		opercurse = 0;
		init();
	}
}

function clicknumber2() {
	if ( next == 0&&patterns[2]!= ""&&patterns[2]!= null) {
		numbercurse = 1;
		opercurse = 1;
		for (var i = 2; i < 12; i++) {
			patterns[i] = "";
		}
		init2();
		(buttonid[0]).hide();
	}
}

function init2() {
	$("#innum1").html(user[1]);
	$("#innum2").html(user[2]);
	$("#innum3").html(user[3]);
	$("#innum4").html(user[4]);
	$("#innum1").show();
	$("#innum2").show();
	$("#innum3").show();
	$("#innum4").show();

	$("#number2").html("&nbsp");
	$("#number3").html("&nbsp");
	$("#number4").html("&nbsp");
	$("#number5").html("&nbsp");
	$("#number6").html("&nbsp");

	$("#oper2").html("&nbsp");
	$("#oper3").html("&nbsp");

	$("#answer1").html("?");
	$("#answer2").html("?");
	$("#answer3").html("?");
}

function clicknumber3() {
	if ( next == 0&&patterns[4]!= ""&&patterns[4]!= null) {
		numbercurse = 2;
		opercurse = 1;
		for (var i = 4; i < 12; i++) {
			patterns[i] = "";
		}
		init3();
		(buttonid[0]).hide();
		(buttonid[2]).hide();
		(buttonid[3]).show();
		(buttonid[3]).html(patterns[3]);

	}
}

function init3() {
	$("#innum1").html(user[1]);
	$("#innum2").html(user[2]);
	$("#innum3").html(user[3]);
	$("#innum4").html(user[4]);
	$("#innum1").show();
	$("#innum2").show();
	$("#innum3").show();
	$("#innum4").show();

	$("#number3").html("&nbsp");
	$("#number4").html("&nbsp");
	$("#number5").html("&nbsp");
	$("#number6").html("&nbsp");

	$("#oper2").html("&nbsp");
	$("#oper3").html("&nbsp");

	$("#answer2").html("?");
	$("#answer3").html("?");
}

function clicknumber4() {
	 if(next==0&&patterns[6]!= ""&&patterns[6]!= null){
	numbercurse = 3;
	opercurse = 2;
	for (var i = 6; i < 12; i++) {
		patterns[i] = "";
	}
	init4();
	(buttonid[0]).hide();
	(buttonid[2]).hide();
	(buttonid[3]).show();
	(buttonid[3]).html(patterns[3]);

	(buttonid[4]).hide();

}
	}

function init4() {
	$("#innum1").html(user[1]);
	$("#innum2").html(user[2]);
	$("#innum3").html(user[3]);
	$("#innum4").html(user[4]);
	$("#innum1").show();
	$("#innum2").show();
	$("#innum3").show();
	$("#innum4").show();

	$("#number4").html("&nbsp");
	$("#number5").html("&nbsp");
	$("#number6").html("&nbsp");

	$("#oper3").html("&nbsp");

	$("#answer2").html("?");
	$("#answer3").html("?");
}

function clicknumber5() {
	 if(next==0&&patterns[8]!= ""&&patterns[8]!= null){
	numbercurse = 4;
	opercurse = 2;
	for (var i = 8; i < 12; i++) {
		patterns[i] = "";
	}
	init5();
	(buttonid[0]).hide();
	(buttonid[2]).hide();
	(buttonid[3]).show();
	(buttonid[3]).html(patterns[3]);

	(buttonid[4]).hide();
	(buttonid[6]).hide();
	(buttonid[7]).show();
	(buttonid[7]).html(patterns[7]);

}
	}

function init5() {
	$("#innum1").html(user[1]);
	$("#innum2").html(user[2]);
	$("#innum3").html(user[3]);
	$("#innum4").html(user[4]);
	$("#innum1").show();
	$("#innum2").show();
	$("#innum3").show();
	$("#innum4").show();

	$("#number5").html("&nbsp");
	$("#number6").html("&nbsp");

	$("#oper3").html("&nbsp");

	$("#answer3").html("?");
}

function clicknumber6() {
	 if(next==0&&patterns[10]!= ""&&patterns[10]!= null){
	numbercurse = 5;

	for (var i = 10; i < 12; i++) {
		patterns[i] = "";
	}
	init6();
	(buttonid[0]).hide();
	(buttonid[2]).hide();
	(buttonid[3]).show();
	(buttonid[3]).html(patterns[3]);

	(buttonid[4]).hide();
	(buttonid[6]).hide();
	(buttonid[7]).show();
	(buttonid[7]).html(patterns[7]);

	(buttonid[8]).hide();
	
}
}
function init6() {
	$("#innum1").html(user[1]);
	$("#innum2").html(user[2]);
	$("#innum3").html(user[3]);
	$("#innum4").html(user[4]);
	$("#innum1").show();
	$("#innum2").show();
	$("#innum3").show();
	$("#innum4").show();

	$("#number6").html("&nbsp");

	$("#answer3").html("?");
}

function clickoper1() {
	 if(next==0&&patterns[1]!= ""&&patterns[1]!= null){
	numbercurse = 1;
	opercurse = 0;
	for (var i = 1; i < 12; i++) {
		patterns[i] = "";
	}
	init7();
	buttonid[0].hide();
}
}
function init7() {
	$("#innum1").html(user[1]);
	$("#innum2").html(user[2]);
	$("#innum3").html(user[3]);
	$("#innum4").html(user[4]);
	$("#innum1").show();
	$("#innum2").show();
	$("#innum3").show();
	$("#innum4").show();

	$("#number2").html("&nbsp");
	$("#number3").html("&nbsp");
	$("#number4").html("&nbsp");
	$("#number5").html("&nbsp");
	$("#number6").html("&nbsp");

	$("#oper1").html("&nbsp");
	$("#oper2").html("&nbsp");
	$("#oper3").html("&nbsp");

	$("#answer1").html("?");
	$("#answer2").html("?");
	$("#answer3").html("?");
}

function clickoper2() {
	 if(next==0&&patterns[5]!= ""&&patterns[5]!= null){
	numbercurse = 3;
	opercurse = 1;
	for (var i = 5; i < 12; i++) {
		patterns[i] = "";
	}
	init8();
	(buttonid[0]).hide();
	(buttonid[2]).hide();
	(buttonid[3]).show();
	(buttonid[3]).html(patterns[3]);

	(buttonid[4]).hide();
	
}
}
function init8() {
	$("#innum1").html(user[1]);
	$("#innum2").html(user[2]);
	$("#innum3").html(user[3]);
	$("#innum4").html(user[4]);
	$("#innum1").show();
	$("#innum2").show();
	$("#innum3").show();
	$("#innum4").show();

	$("#number4").html("&nbsp");
	$("#number5").html("&nbsp");
	$("#number6").html("&nbsp");

	$("#oper2").html("&nbsp");
	$("#oper3").html("&nbsp");

	$("#answer2").html("?");
	$("#answer3").html("?");
}

function clickoper3() {
	 if(next==0&&patterns[9]!= ""&&patterns[9]!= null){
	numbercurse = 5;
	opercurse = 2;
	for (var i = 9; i < 12; i++) {
		patterns[i] = "";
	}
	init9();
	buttonid[0].hide();
	buttonid[2].hide();
	buttonid[3].show();
	buttonid[3].html(patterns[3]);

	buttonid[4].hide();
	buttonid[6].hide();
	buttonid[7].show();
	buttonid[7].html(patterns[7]);

	buttonid[8].hide();
	
}
}
function init9() {
	$("#innum1").html(user[1]);
	$("#innum2").html(user[2]);
	$("#innum3").html(user[3]);
	$("#innum4").html(user[4]);
	$("#innum1").show();
	$("#innum2").show();
	$("#innum3").show();
	$("#innum4").show();

	$("#oper3").html("&nbsp");

	$("#number6").html("&nbsp");

	$("#answer3").html("?");
}


$(document).ready(function() {
	$("#innum1,#innum2,#innum3,#innum4").click(clickinnum);

});

function clickinnum() {
	//this就是当前点击的对象
if(sessionStorage.flag==2){
	if (next) {
		init();
		start();
		timer = 24;
		$("#timer").html(timer);
		next = 0;
	} else {
		switch (numbercurse) {
			case 0:
				patterns[0] = $(this).html();
				buttonid[0] = $(this);
				$("#number1").html(patterns[0]);
				buttonid[0].hide();
				numbercurse++;
				break;
			case 1:
				if (patterns[0] == null || patterns[0] == "") {
					numbercurse = 0;
					break;
				} else {
					if (patterns[1] == null || patterns[1] == "") {
						alert("请输入运算符，先!");
						break;
					} else {
						patterns[2] = $(this).html();
						buttonid[2] = $(this);
						$("#number2").html(patterns[2]);
						switch (patterns[1]) {
							case 1:
								patterns[3] = parseFloat(patterns[0]) + parseFloat(patterns[2]);
								break;
							case 2:
								patterns[3] = parseFloat(patterns[0]) - parseFloat(patterns[2]);
								break;
							case 3:
								patterns[3] = parseFloat(patterns[0]) * parseFloat(patterns[2]);
								break;
							case 4:
								patterns[3] = parseFloat(patterns[0]) / parseFloat(patterns[2]);
								break;

						}
						numbercurse++;
					}

				}
				$(this).html(patterns[3]);
				$("#answer1").html(patterns[3]);
				buttonid[3] = $(this);
				break;
			case 2:
				patterns[4] = $(this).html();
				buttonid[4] = $(this);
				$("#number3").html(patterns[4]);
				buttonid[4].hide();
				numbercurse++;
				break;
			case 3:
				if (patterns[4] == null || patterns[4] == "") {
					numbercurse = 3;
					break;
				} else {
					if (patterns[5] == null || patterns[5] == "") {
						alert("请输入运算符，先!");
						break;
					} else {
						patterns[6] = $(this).html();
						buttonid[6] = $(this);
						$("#number4").html(patterns[6]);
						switch (patterns[5]) {
							case 1:
								patterns[7] = parseFloat(patterns[4]) + parseFloat(patterns[6]);
								break;
							case 2:
								patterns[7] = parseFloat(patterns[4]) - parseFloat(patterns[6]);
								break;
							case 3:
								patterns[7] = parseFloat(patterns[4]) * parseFloat(patterns[6]);
								break;
							case 4:
								patterns[7] = parseFloat(patterns[4]) / parseFloat(patterns[6]);
								break;

						}
						numbercurse++;
					}

				}
				$(this).html(patterns[7]);
				$("#answer2").html(patterns[7]);
				buttonid[7] = $(this);
				break;
			case 4:
				patterns[8] = $(this).html();
				$("#number5").html(patterns[8]);
				buttonid[8] = $(this);
				buttonid[8].hide();
				numbercurse++;
				break;
			case 5:

				if (patterns[8] == null || patterns[8] == "") {
					numbercurse = 5;
					break;
				} else {
					if (patterns[9] == null || patterns[9] == "") {
						alert("请输入运算符，先!");
						break;
					} else {
						patterns[10] = $(this).html();
						buttonid[10] = $(this);
						$("#number6").html(patterns[10]);
						switch (patterns[9]) {
							case 1:
								patterns[11] = parseFloat(patterns[8]) + parseFloat(patterns[10]);
								break;
							case 2:
								patterns[11] = parseFloat(patterns[8]) - parseFloat(patterns[10]);
								break;
							case 3:
								patterns[11] = parseFloat(patterns[8]) * parseFloat(patterns[10]);
								break;
							case 4:
								patterns[11] = parseFloat(patterns[8]) / parseFloat(patterns[10]);
								break;

						}
						numbercurse++;

						$("#answer3").html(patterns[11]);
						buttonid[11] = $(this);
						if (parseFloat(patterns[11]) == 24) {
							autoPlay();
							$(this).html("Next");
							clearInterval(timename2);
							clearTimeout(timename1);
							nextpass()

						}
					}

				}

				break;
		}

	}
}
}
function clickinopr1() {
	if(sessionStorage.flag==2){
	switch (opercurse) {
		case 0:
			patterns[1] = 1;
			$("#oper1").html($("#inopr1").html());
			break;
		case 1:
			patterns[5] = 1;
			$("#oper2").html($("#inopr1").html());
			break;
		case 2:
			patterns[9] = 1;
			$("#oper3").html($("#inopr1").html());
			break;

	}
	opercurse++;
}
}
function clickinopr2() {
	if(sessionStorage.flag==2){
	switch (opercurse) {
		case 0:
			patterns[1] = 2;
			$("#oper1").html($("#inopr2").html());
			break;
		case 1:
			patterns[5] = 2;
			$("#oper2").html($("#inopr2").html());
			break;
		case 2:
			patterns[9] = 2;
			$("#oper3").html($("#inopr2").html());
			break;

	}
	opercurse++;
}
}

function clickinopr3() {
	if(sessionStorage.flag==2){
	switch (opercurse) {
		case 0:
			patterns[1] = 3;
			$("#oper1").html($("#inopr3").html());
			break;
		case 1:
			patterns[5] = 3;
			$("#oper2").html($("#inopr3").html());
			break;
		case 2:
			patterns[9] = 3;
			$("#oper3").html($("#inopr3").html());
			break;

	}
	opercurse++;
}
}
function clickinopr4() {
if(sessionStorage.flag==2){
	switch (opercurse) {
		case 0:
			patterns[1] = 4;
			$("#oper1").html($("#inopr4").html());
			break;
		case 1:
			patterns[5] = 4;
			$("#oper2").html($("#inopr4").html());
			break;
		case 2:
			patterns[9] = 4;
			$("#oper3").html($("#inopr4").html());
			break;

	}
	opercurse++;
}
}
