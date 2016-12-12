var btn = document.querySelector('.btn');
var arr = [0,128,-128];
var arr1 = [-128,0,128];
var arr2 = [128,-128,0];
var len = arr.length; //
var isScroll = false;
var base1 = 0;
var base2 = 0;
var base3 = 0;
var c1ul = document.querySelector('.c1ul');
var c1uli = document.querySelectorAll('.c1ul img');
var c2ul = document.querySelector('.c2ul');
var c2uli = document.querySelectorAll('.c2ul img');
var c3ul = document.querySelector('.c3ul');
var c3uli = document.querySelectorAll('.c3ul img');
var rst = document.querySelector('.result');
var tipMsg = "很遗憾，您未中奖!";

btn.addEventListener("touchstart",function(){
	rst.innerHTML = "···············";
    if(!isScroll){
        isScroll = true;
		var randomNum = parseInt(Math.random()*1000)+1;
		var index;
		console.log(randomNum);
		//随机出现三个都不相同（未中奖�?
		if(randomNum < 500)
		{
            var randomArr = [0,1,2];
            var a1 = parseInt(Math.random()*3);
            //console.log(a1);
            base1 = fn(arr,randomArr[a1]) + 3;
            //console.log(randomArr[a1]);
            randomArr.splice(randomArr.indexOf(randomArr[a1]),1);
            //console.log(randomArr);
            var a2 = parseInt(Math.random()*2);
            //console.log(a2);
            base2 = fn(arr1,randomArr[a2]) + 6;
            //console.log(randomArr[a2]);
            randomArr.splice(randomArr.indexOf(randomArr[a2]),1);
            //console.log(randomArr);
           // console.log(randomArr[0]);
            base3 = fn(arr2,randomArr[0]) + 9;
			tipMsg = "三个都不一样，您未中奖!";
		}
		//随机出现两个是相同（未中奖）
		else if(randomNum < 850)
		{
            var randomArr1 = [0,1,2];
            var b1 = parseInt(Math.random()*3);
            var b2 = parseInt(Math.random()*3);
            var b3;
            if(b1 == b2){
                randomArr1.splice(randomArr1.indexOf(randomArr1[b1]),1);
                b3 = randomArr1[parseInt(Math.random()*2)];
            }else{
                if(parseInt(Math.random()*2) == 0){
                        b3 = b1;
                }else {
                    b3 = b2;
                }
            }
            base1 = fn(arr,b1) + 3;
            base2 = fn(arr1,b2) + 6;
            base3 = fn(arr2,b3) + 9;
			tipMsg = "两个一样，您未中奖!";
		}else if(randomNum < 900){  //三连�?
            base1 = fn(arr,0) + 3;
            base2 = fn(arr1,0) + 6;
            base3 = fn(arr2,0) + 9;
			tipMsg = "恭喜中奖，奖项一";
		}else if(randomNum < 950){ //三连情况�?
            base1 = fn(arr,1) + 3;
            base2 = fn(arr1,1) + 6;
            base3 = fn(arr2,1) + 9;
			tipMsg = "恭喜中奖，奖项二";
		}else{                    //三连情况�?
			base1 = fn(arr,2) + 3;
			base2 = fn(arr1,2) + 6;
			base3 = fn(arr2,2) + 9;
			tipMsg = "恭喜中奖，奖项三";
        }
        start(arr,c1uli,base1);
        start(arr1,c2uli,base2);
		//�?后一个滚动的时间�?长，停止之后执行回调 显示结果信息
        start(arr2,c3uli,base3,function(tipMsg){
			rst.innerHTML = tipMsg ;
		});
    }
});

function fn(arr,num){
    var index = arr.indexOf(0);
    if(index > num){
        return index - num ;
    }else if(index < num){
        if(num - index == 1){
            return 2;
        }else{
            return 1;
        }
    }else {
        return 3;
    }
}

function start(arr,domArr,num,showResult){
    var index =1;
    for(var j=0;j<num;j++){
        setTimeout(function(){
            var a= arr.shift();
            arr.push(a);
            for(var i=0;i<3;i++){
                if(arr[i] == -128){
                    domArr[i].style.transition = "all 0s";
                    domArr[i].style.transform = "translate3d(0,"+arr[i]+"px,0)";
                    //domArr[i].style.zIndex = index;
                }else{
                    index++;
                    domArr[i].style.transition = "all .2s linear";
                    domArr[i].style.transform = "translate3d(0,"+arr[i]+"px,0)";
                    domArr[i].style.zIndex = index;
                }
            }
        },j*200);
    }
	if(showResult && typeof showResult == "function"){
		setTimeout(function(){
			showResult(tipMsg);
			isScroll = false;
		},j*200);
	}
}


