/**
*author:wl
*date:2017-1-12
*保持登陆插件
*/
var clock;
//激活
var keepActive= function(){
   location.reload();
   console.log('love one time。。。');  
}

function activeOrClose(){
   var btnText= document.getElementById("love").innerHTML;
   if(btnText == "loving"){
     document.getElementById("love").innerHTML="love";
	 clearInterval(clock);
	 console.log('小助手已关闭...');
   }else if(btnText == "love"){
      document.getElementById("love").innerHTML="loving";
	  clock = setInterval( function() {
        keepActive();
      }, 300000);
	  console.log('小助手重新开启...');
   }
}


var div = document.createElement('div');
div.style.height ="22px";
div.style.width ="100%";
div.style.float = "right"
  div.innerHTML = "<button id='love' style='width:50px;height:22px;float:right;line-height:10px;' onClick='activeOrClose()'>loving</button>";
  document.body.insertBefore(div,document.body.firstChild);
clock = setInterval( function() {
    keepActive();
  }, 300000);
