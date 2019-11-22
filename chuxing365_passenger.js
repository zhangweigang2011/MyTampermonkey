// ==UserScript==
// @name         chuxing365_passenger
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        */order/findpreparedata*
// @grant        none
// ==/UserScript==
var familyNames = new Array(
"赵", "钱", "孙", "李", "周", "吴", "郑", "王", "冯", "陈",
"褚", "卫", "蒋", "沈", "韩", "杨", "朱", "秦", "尤", "许",
"何", "吕", "施", "张", "孔", "曹", "严", "华", "金", "魏",
"陶", "姜", "戚", "谢", "邹", "喻", "柏", "水", "窦", "章",
"云", "苏", "潘", "葛", "奚", "范", "彭", "郎", "鲁", "韦",
"昌", "马", "苗", "凤", "花", "方", "俞", "任", "袁", "柳",
"酆", "鲍", "史", "唐", "费", "廉", "岑", "薛", "雷", "贺",
"倪", "汤", "滕", "殷", "罗", "毕", "郝", "邬", "安", "常",
"乐", "于", "时", "傅", "皮", "卞", "齐", "康", "伍", "余",
"元", "卜", "顾", "孟", "平", "黄", "和", "穆", "萧", "尹"
);
var givenNames = new Array(
"子璇", "淼", "国栋", "夫子", "瑞堂", "甜", "敏", "尚", "国贤", "贺祥", "晨涛",
"昊轩", "易轩", "益辰", "益帆", "益冉", "瑾春", "瑾昆", "春齐", "杨", "文昊",
"东东", "雄霖", "浩晨", "熙涵", "溶溶", "冰枫", "欣欣", "宜豪", "欣慧", "建政",
"美欣", "淑慧", "文轩", "文杰", "欣源", "忠林", "榕润", "欣汝", "慧嘉", "新建",
"建林", "亦菲", "林", "冰洁", "佳欣", "涵涵", "禹辰", "淳美", "泽惠", "伟洋",
"涵越", "润丽", "翔", "淑华", "晶莹", "凌晶", "苒溪", "雨涵", "嘉怡", "佳毅",
"子辰", "佳琪", "紫轩", "瑞辰", "昕蕊", "萌", "明远", "欣宜", "泽远", "欣怡",
"佳怡", "佳惠", "晨茜", "晨璐", "运昊", "汝鑫", "淑君", "晶滢", "润莎", "榕汕",
"佳钰", "佳玉", "晓庆", "一鸣", "语晨", "添池", "添昊", "雨泽", "雅晗", "雅涵",
"清妍", "诗悦", "嘉乐", "晨涵", "天赫", "玥傲", "佳昊", "天昊", "萌萌", "若萌"
);
function getName(){
	var i = parseInt(Math.random()*100);
    var familyName = familyNames[i];
    var j = parseInt(Math.random()*100);
    var givenName = givenNames[i];
    var name = familyName + givenName + "测试";
    return name;
}
function getMoble() {
	var prefixArray = new Array("130", "131", "132", "133", "135", "137",
			"138", "170", "187", "189");
	var i = parseInt(10 * Math.random());
	var prefix = prefixArray[i];
	for (var j = 0; j < 8; j++) {
		prefix = prefix + Math.floor(Math.random() * 10);
	}
	return prefix;
}

function getId_no(){
	var coefficientArray = [ "7","9","10","5","8","4","2","1","6","3","7","9","10","5","8","4","2"];// 加权因子
	var lastNumberArray = [ "1","0","X","9","8","7","6","5","4","3","2"];// 校验码
	var address = "420101"; // 住址
	var birthday = "19810101"; // 生日
	var s = Math.floor(Math.random()*10).toString() + Math.floor(Math.random()*10).toString() + Math.floor(Math.random()*10).toString();
	var array = (address + birthday + s).split("");
	var total = 0;
	for(i in array){
	total = total + parseInt(array[i])*parseInt(coefficientArray[i]);
	}
	var lastNumber = lastNumberArray[parseInt(total%11)];
	var id_no_String = address + birthday + s + lastNumber;
	return id_no_String;
}


function clearAll(){
   $(".ipt_span").css('display','none');
}

function setValue(){
	$("input[name='passengerName']").each(function(index, element) {
		var temp = $(this).val();
		if(temp == "undefined" || temp == null || temp == ""){
			$(this).val(getName());
		}
    });
	$("input[name='phone']").each(function(index, element) {
		var temp = $(this).val();
		if(temp == "undefined" || temp == null || temp == ""){
			$(this).val("15801684857");
		}
    });
	$("input[name='cardCode']").each(function(index, element) {
		var temp = $(this).val();
		if(temp == "undefined" || temp == null || temp == ""){
			$(this).val(getId_no());
		}
    });
}

(function() {
    'use strict';
    $("div.ddtable-foot2").click(function(){
    	setValue();
    	clearAll();
    });
    clearAll();
    setValue();
    //初始化联系人
    //var linkmanName = document.getElementById("linkmanName");
    //linkmanName.setAttribute("_placeholder","");
    $("#linkmanName").val("测试");
    $("#linkManEmail").val("zhangweigang@chuxing365.com");
    $("#linkmanPhone").val("15801684857");
    //document.getElementById("linkManEmail").value="zhangweigang@chuxing365.com";
    //document.getElementById("linkmanPhone").value=getMoble();

    // Your code here...
})();




