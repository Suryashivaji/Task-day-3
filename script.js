// Q 1

let obj1={
  name : "person1",
  age : 5
}
 let obj2 ={
  age :5,
  name : "person1"
 }
 let json1 = JSON.stringify(obj1);
 let json2 =JSON.stringify(obj2);
 if(obj1===obj2){
  console.log("True");
 }
 else{
  console.log("False");
 }

// Q 2

var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all","true");
request.send();
request.onload = function(){
  var data = request.response;
  var result =JSON.parse(data);
for(var i =0; i<result.length;i++){
  console.log(result[i].flags.png);
}
}


// Q 3
var request1 = new XMLHttpRequest();
request1.open("GET","https://restcountries.com/v3.1/all","true");
request1.send();
request1.onload = function(){
  var data = request1.response;
  var result =JSON.parse(data);

  for(var i = 0 ; i<result.length; i++){
    console.log(result[i].name.common,result[i].region,result[i].subregion,result[i].population);
  }
}


