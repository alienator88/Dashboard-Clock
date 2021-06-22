// START CLOCK SCRIPT

Number.prototype.pad = function(n) {
    for (var r = this.toString(); r.length < n; r = 0 + r);
    return r;
  };
  
  function updateClock() {
    var now = new Date();
    var min = now.getMinutes(),
      hou = now.getHours(),
      mo = now.getMonth(),
      dy = now.getDate(),
      yr = now.getFullYear();
      // AM or PM
    var pm = hou >= 12 ? 'PM' : 'AM';
      // Find current hour in AM-PM Format
      hou = hou % 12;      
      // To display "0" as "12"
      hou = hou ? hou : 12;

    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var tags = ["mon", "d", "y", "h", "m", "p"],
      corr = [months[mo], dy, yr, hou.pad(2), min.pad(2), pm];
    for (var i = 0; i < tags.length; i++)
      document.getElementById(tags[i]).firstChild.nodeValue = corr[i];
  }
  
  function initClock() {
    updateClock();
    window.setInterval("updateClock()", 1);
  }
  
  // END CLOCK SCRIPT
