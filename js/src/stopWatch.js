var d ;
var startTime = 0;
var stopTime = 0;
var flag;

function start(){
  clearInterval(flag);
  document.getElementById('watch').innerHTML = '00:00:00:00';
  console.log('START')
  d = new Date();
  startTime= d.getTime();
  flag = setInterval(function(){
    d = new Date();
    stopTime = d.getTime();
    var rightFormat = msToTime(stopTime - startTime);
    document.getElementById('watch').innerHTML = rightFormat;
  },1);
}

function stop(){
  clearInterval(flag);
  console.log('STOP')
  d = new Date();
  stopTime = d.getTime();
  //console.log(time);
  //var rightFormat = msToTime(stopTime - startTime);
  //document.getElementById('watch').innerHTML = rightFormat;
}

function reset(){
  console.log('RESET')
}

function msToTime(duration) {
      var x;
      //x=Math.floor(duration%1000);
      var milli = ((duration % 1000) / 10).toFixed(0);
      x=Math.floor(duration/1000);
      var seconds = x % 60;
      x=Math.floor(x/60);
      var minutes = x % 60;
      x=Math.floor(x/60);
      var hours= x%24;
      if(hours < 10) hours="0" + hours;
      if(minutes < 10) minutes="0" + minutes;
      if(seconds < 10) seconds="0" + seconds;
      if(milli < 10) milli="0" + milli;

      return hours + ":" + minutes + ":" + seconds + ":" + milli ;
  }
