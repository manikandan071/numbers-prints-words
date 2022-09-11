var given="876";
//var rem="";


while(0<given.length){
	var rem=given%10;
	if(rem==0){
		console.log("zero");
	}
	else if(rem==1){
		console.log("one");
	}
	else if(rem==2){
		console.log("two");
	}
	else if(rem==3){
		console.log("three");
	}
	else if(rem==4){
		console.log("four");
	}
	else if(rem==5){
		console.log("five");
	}
	else if(rem==6){
		console.log("six");
	}
	else if(rem==7){
		console.log("seven");
	}
	else if(rem==8){
		console.log("eight");
	}
	else{
		console.log("nine")
	}
	given=Math.floor(given/10);
	console.log(given);
}







let email="manikandan2dd32@gmail.com"

let str=email.indexOf("@");
console.log(str);

let sli=email.slice(0,str);

let name=sli.match(/[a-z]/g);
let num=sli.match(/[0-9]/g);

console.log(name);
console.log(num);

var mail="manidhiyamech234@gmail.com";
var sol="";
for( var i=0; i<mail.length;i++){
	if(mail[i]=="@"){
		//sol+=mail[i];
		break
		
	}
	console.log(mail[i]);
}
;
