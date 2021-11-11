/**
 * 
 */

var terminal = document.getElementById('terminal');
var giris = document.getElementById('giris');


$('textarea').typetype('enginbalikci@termisiteCV ~ server$ : ',{e:0,t:1}).typetype('Uzak sunucuya bağlanılıyor. .. ... bağlanıldı!',{e:0,t:35});
$('textarea').typetype('\nenginbalikci@termisiteCV ~ server$ : ',{e:0,t:1}).typetype('İstenen bilgiler getiriliyor. .. ... Hazır!',{e:0,t:25});
$('textarea').typetype('\nenginbalikci@termisiteCV ~ server$ : ',{e:0,t:1}).typetype('Okarinasai, senpai!',{e:0,t:5});
$('textarea').typetype('\n.\n. \n. \n. \n',{e:0,t:5});

$('p').typetype('\n enginbalikci@termisiteCV ~ server$ :',{e:0,t:1});


ehe.addEventListener('keydown', function(ev) {
  if (!ev) var ev = window.event;
  if (ev.keyCode !== 13) return;
  ev.preventDefault();
  
  var str = terminal.lastElementChild.innerHTML;
  
  switch (str) {
    case '1':
      
        
      setTimeout(
        timeoutCallBack.bind(this, 'ehehehehe 1.. ')
      );break;
    case '2':
    setTimeout(
        timeoutCallBack.bind(this, 'ehehehehe 2... ')
      );break;
    case '3':
    setTimeout(
        timeoutCallBack.bind(this, 'ehehehehe 3... ')
      );break;

    default:
      createNewCommand('Beklenilenden farklı cevap :(');
      
     
   }
 

  
  function timeoutCallBack(str) {
    createNewCommand(str);
  }

  (function($){
    $.fn.setCursorToTextEnd = function() {
        var $initialVal = this.val();
        this.val($initialVal);
    };
});

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