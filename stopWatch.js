var d ;
var startTime = 0;
var stopTime = 0;
var flag;
var startCount = 0;
var stopPressTime = 0;
var stopPressed= 0;
var startPressed = 0;
var tmp = 0 ;

function start(){
  d = new Date();
  //tmp = d.getTime() - startTime + stopTime;
  clearInterval(flag);
  startPressed = 1;
  startCount++;
  if(startCount === 1){
    d = new Date();
    startTime= d.getTime();
    document.getElementById('watch').innerHTML = '00:00:00:00';
  }
  flag = setInterval(function(){
   if(stopPressed === 1){
    //  clearInterval(flag);
  //     console.log('stop pressed')
  //     console.log('stop press time in start',stopTime)
  document.getElementById('watch').innerHTML = msToTime(tmp);
      stopPressed = 0;
      stopTime = d.getTime() + tmp;
      return;
   //
    } else {
      d = new Date();
      stopTime = d.getTime() ;
     }
      // console.log('stop press time after if',stopTime)
      var rightFormat = msToTime(stopTime - startTime);
      document.getElementById('watch').innerHTML = rightFormat;
  },1);

  console.log('tmp is: ',msToTime(tmp));
  console.log('start is: ',msToTime(startTime));
  console.log('stop is: ',msToTime(stopTime));
}

function stop(){
  if(stopPressed === 1 || startPressed === 0){
    return;
  }
  clearInterval(flag);
  console.log('STOP')
  d = new Date();
  stopTime = d.getTime();
  console.log('stop press time in stop',stopTime)
  stopPressed = 1;
  tmp = stopTime - startTime;
}

function reset(){
  console.log('RESET')
  clearInterval(flag);
  startCount = 0 ;
  document.getElementById('watch').innerHTML = '00:00:00:00';
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
