function a(){
  console.log('A');
}

var a = function(){
  console.log('A');
}

//slowfunc가 종료되면 callback func을 호출
function slowfunc(callback){
  callback();
}

slowfunc(a);
