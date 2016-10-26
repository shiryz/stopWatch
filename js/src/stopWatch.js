var d = new Date();
var startTime = 0;
var stopTime = 0;

function start(){
  console.log('START')

  d = new Date();
  startTime= d.getTime();
}

function stop(){
  console.log('STOP')
  d = new Date();
  stopTime = d.getTime();
  //console.log(time);
  var rightFormat = msToTime(stopTime - startTime);
  document.getElementById('watch').innerHTML = rightFormat;
}

function reset(){
  console.log('RESET')
}

function msToTime(duration) {
      var x;
      x=Math.floor(duration/1000);
      console.log(x);
      var seconds = x % 60;
      console.log(seconds);
      x=Math.floor(x/60);
      console.log(x);
      var minutes = x % 60;
      x=Math.floor(x/60);
      console.log(x);
      var hours= x%24;

      return hours + ":" + minutes + ":" + seconds ;
  }
