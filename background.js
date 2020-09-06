


function myFunction() {
    var d = new Date();
    var n = d.getSeconds();
    var ans=(n*100)/60;
    var testing=ans;
    var testing2=100-testing;
    let root = document.documentElement;
    root.style.setProperty('--mouse-x', testing+"%");
    root.style.setProperty('--mouse-y', testing2+"%");
  }

  var myVar = setInterval(myFunction, 1000);