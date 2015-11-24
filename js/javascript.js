  $(function() {
    
    var $h = null;
    var $m = null;
    var $s = null;
    var $r, $g, $b, $rgb;

    function getTime() {
      var $time = new Date();
      $h = $time.getHours();
      $m = $time.getMinutes();
      $s = $time.getSeconds();
      if ($h < 10) {$h = "0"+$h};
      if ($m < 10) {$m = "0" + $m};
      if ($s < 10) {$s = "0" + $s};
      return {
        'hours': $h,
        'minutes': $m,
        'seconds':$s
      };
    }
    function updateTime(){
      var $t = getTime();
      $('.hours').text($t.hours);
      $('.minutes').text($t.minutes);
      $('.seconds').text($t.seconds);
      $r = parseInt($t.hours, 16)
      $g = parseInt($t.minutes, 16)
      $b = parseInt($t.seconds, 16)
      $rgb = "rgb("+$r+","+$g+","+$b+")"
    }
    setInterval(function(){
      updateTime();
      $('body').css("background-color", $rgb );
      console.log($rgb);
    }, 1000);
  });