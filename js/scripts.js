console.log("Hello! Welcome to My Portfolio Site. It's nice to see you here.")

function menuToggle() {
    var x = document.getElementById('myNavtoggle');
    if (x.className === 'navtoggle' && $(window).width() < 640) {
      x.className += ' responsive';
    } else {
      x.className = 'navtoggle';
    }
  }