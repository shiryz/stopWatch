var d;
var time = 0;

function start(){
  console.log('START')
  console.log(0)
  d = new Date();
}

function stop(){
  console.log('STOP')
  time = d.getMilliseconds();
  console.log(time);
}

function reset(){
  console.log('RESET')
}
