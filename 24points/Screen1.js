window.onload = function load() {
	
	 $("#myScore").html(localStorage.score); 
  	 var strJosn0 = localStorage.getItem("Rank"); 
     var	strJosn=  new Array();
     strJosn=	strJosn0.split(","); 
   // alert(strJosn);
  	 if(parseInt(localStorage.score)>parseInt(strJosn[0])){
  		 $("#myRank").text(1); 
  		 $("#Rank1").text(localStorage.score); 
  		 $("#Rank2").text(strJosn[0]); 
  		 $("#Rank3").text(strJosn[1]); 
  		 $("#Rank4").text(strJosn[2]); 
  		 $("#Rank5").text(strJosn[3]); 
  		 jsonAjaxPost();
  		
  	    }
  	 else if(parseInt(localStorage.score)<parseInt(strJosn[strJosn.length-1]))
  		{
  		 $("#myRank").text(strJosn.length+1); 
  		 $("#Rank1").text(strJosn[0]); 
  		 $("#Rank2").text(strJosn[1]); 
  		 $("#Rank3").text(strJosn[2]); 
  		 $("#Rank4").text(strJosn[3]); 
  		 $("#Rank5").text(strJosn[4]); 
  		 jsonAjaxPost();
  		}
  	 else if(parseInt(localStorage.score)==parseInt(strJosn[strJosn.length-1])){
  		 $("#myRank").text(strJosn.length); 
  		 $("#Rank1").text(strJosn[0]); 
  		 $("#Rank2").text(strJosn[1]); 
  		 $("#Rank3").text(strJosn[2]); 
  		 $("#Rank4").text(strJosn[3]); 
  		 $("#Rank5").text(strJosn[4]); 
  	    }
  	 else{
  		 for(var i=0; i<strJosn.length-1; i++)
  		 {
  		 		
  		 		if(parseInt(localStorage.score)==parseInt(strJosn[i])){
  		 		 $("#myRank").text(i+1); 
  		 		 $("#Rank1").text(strJosn[0]); 
  				 $("#Rank2").text(strJosn[1]); 
  				 $("#Rank3").text(strJosn[2]); 
  				 $("#Rank4").text(strJosn[3]); 
  				 $("#Rank5").text(strJosn[4]); 
  		 		 
  		 		 break;
  		 	}else if(parseInt(localStorage.score)<parseInt(strJosn[i])&&parseInt(localStorage.score)>parseInt(strJosn[i+1])){
  		 		 $("#myRank").text(i+2); 
  		 		 strJosn[i+5]= strJosn[i+4];
  		 	   	strJosn[i+4]= strJosn[i+3];
  		    	 strJosn[i+3]= strJosn[i+2];
  		    	strJosn[i+2]= strJosn[i+1];
  		 		 strJosn[i+1]=localStorage.score;
  		 		 $("#Rank1").text(strJosn[0]); 
  				 $("#Rank2").text(strJosn[1]); 
  				 $("#Rank3").text(strJosn[2]); 
  				 $("#Rank4").text(strJosn[3]); 
  				 $("#Rank5").text(strJosn[4]); 
  		 		 jsonAjaxPost();
  		 		 break;
  		 	}     
  		       
  		 }
  	     }	
}

 function jsonAjaxPost(){  
             var score=localStorage.score;    
             $.ajax({  
               type:"post",//请求方式  
               url:"jsonAjaxAction?userName="+encodeURI(encodeURI(score))  ,//发送请求地址  
               timeout:30000,//超时时间：30秒  
               dataType:"json",//设置返回数据的格式  
               //请求成功后的回调函数 data为json格式  
               success:function(data){              
                 // alert("success");  
              },  
              //请求出错的处理  
              error:function(){  
                        alert("fail");  
              }  
           });  
          }  

