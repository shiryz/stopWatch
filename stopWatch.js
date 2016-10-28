var d ;
var startTime = 0;
var lapTime = 0;
var flag;
var startCount = 0;
var stopPressTime = 0;
var stopPressed= 0;
var startPressed = 0;
var tmp = 0 ;

function startWatch(){
  d = new Date();
  clearInterval(flag);
  startPressed = 1;
  startCount++;
  console.log('some calculations: ', d.getTime() - startTime + lapTime);
  if(startCount === 1){
    d = new Date();
    startTime= d.getTime();
    document.getElementById('watch').innerHTML = '00:00:00:00';
  }
  flag = setInterval(function(){
    if(stopPressed === 1){
      stopPressed = 0;
      startTime=d.getTime();
    }
      d = new Date();
    var rightFormat = msToTime(d.getTime() - startTime + lapTime);
    document.getElementById('watch').innerHTML = rightFormat;
  },1);
}

function stop(){
  if(stopPressed === 1 || startPressed === 0){
    return;
  }
  clearInterval(flag);
  d = new Date();
  stopPressed = 1;
  lapTime = d.getTime() + lapTime - startTime;
}

function reset(){
  clearInterval(flag);
  startCount = 0 ;
  lapTime = 0;
  document.getElementById('watch').innerHTML = '00:00:00:00';
}

function msToTime(duration) {
      var x;
      var milli = Math.floor(((duration % 1000) / 10));
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
