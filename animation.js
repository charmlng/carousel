function getStyle(el, property){   //元素 属性
	if(getComputedStyle){
		return getComputedStyle(el)[property];
	}else{
		return el.currentStyle[property];      //考虑浏览器的兼容性
	}
}

function animate(el, properties){  /*元素 属性集合*/
	clearInterval(el.timerId);  /*设置多个属性, 要调用多次函数, 每次调用后清除*/
	el.timerId = setInterval(function(){
		
		for(var property in properties){  /*for-in循环*/
			var current;
			var target = properties[property];
			if(property === "opacity"){
				current = Math.round(parseFloat(getStyle(el, "opacity")) * 100);
			}else{
				current = parseInt(getStyle(el, property));
			}
		
			var speed = (target - current) / 50;  //调整数值 - 改变的快慢
			speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
			if(property === "opacity"){
				el.style.opacity = (current + speed) / 100;
			}else{
				el.style[property] = current + speed + "px";
			}
		}
		
	}, 20)   //20毫秒
}
