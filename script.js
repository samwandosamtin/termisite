/**
 * 
 */

var terminal = document.getElementById('terminal');


terminal.addEventListener('keydown', function(ev) {
  if (!ev) var ev = window.event;
  if (ev.keyCode !== 13) return;
  ev.preventDefault();
  
  var str = terminal.lastElementChild.innerHTML;
  
  switch (str) {
    case 'internal-server: ~ server$.....':
      var percentage = 0;
      
      while (percentage < 100) {
        percentage += Math.ceil(Math.random()*10);
        if (percentage > 100) percentage = 100;
        
        setTimeout(
          timeoutCallBack.bind(this, 'asdf 1... '+percentage+'%'),
          percentage*100
        );
      }
      
      setTimeout(
        timeoutCallBack.bind(this, 'asdf 2...'),
        10000
      );
      
      setTimeout(
        timeoutCallBack.bind(this, '> asdf3 <3'),
        12000
      );
      
      break;
    default:
      createNewCommand('Beklenilenden farklı cevap :(');
      
      break;
   }
  
  
  function timeoutCallBack(str) {
    createNewCommand(str);
  }
  
  function createNewCommand(str) {  
    terminal.lastElementChild.contentEditable = 'false';
    var p = document.createElement('p');
    p.contentEditable = true;
    p.innerHTML = (str === undefined) ? '' : str;
    terminal.appendChild(p);
    p.focus();
  }
}, false);


terminal.lastElementChild.focus();