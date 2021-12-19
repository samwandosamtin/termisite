/**
 * 

$('textarea').html('<b>Test</b>').animate({color:'red'},1000);

var html = '<blockquote class="col-sm-9">';
html += '<p class="lead">Lorem Ipsum</p>';
html += '<footer>Lorem Ipsum <cite title="Source Title">Lorem <a href="">link</a> Ipsum</cite></footer>';
html += '</blockquote>';


  
  var typed = new Typed('.typed2', {
    stringsElement: '#typed-strings',
    typeSpeed: 20,
    backSpeed: 0,
    fadeOut: true,
  });
   */
/**$('.p1').typetype('\n instagram. \n Twitter.\n',{e:0,t:5,}).animate({color:'aqua'});
 * 
*$('.p2').typetype('\nenginbalikci@termisiteCV:~$ ',{e:0,t:1}).animate({color:'aqua'}).typetype('cd github.com/samwandosamtin/termisite',{e:0.05,t:35}).animate({color:'red'},1000);;
*$('.p3').typetype('\nenginbalikci@termisiteCV:~$ ',{e:0,t:1}).animate({color:'aqua'}).typetype('cat özgeçmiş.txt',{e:0.04,t:35});
*$('.p4').typetype('\nenginbalikci@termisiteCV:~$ ',{e:0,t:1}).typetype('Okairinasai ^.^ Uğradığınız için teşekkürler. \n\n',{e:0,t:25});
*$('.p5').typetype('İsmim Engin Balıkçı.\n',{e:0,t:5});





$('.p1').append(html);

var html1 = '<blockquote class="col-sm-9">';
html1 += '<p class="lead">Lorem Ipsum</p>';
html1 += '<footer>Lorem Ipsum <cite title="Source Title">ehe <a href="">link</a> Ipsum</cite></footer>';
html1 += '</blockquote>';
$('.p2').append(html1).;
*/
/**
$('textarea').typetype('Ege Üniversitesi BÖTE bölümünü üçüncülük ile bitirmiş bilgisayar öğretmeni, illüstrasyonist ve Jr. yazılımcıyım.\n',{e:0,t:5});

$('textarea').typetype('\nSürekli projeler geliştirmeyi, piyasanın ilerisinde ürünler üretmeyi ve teknolojinin kurdu olmaya bayılıyorum. Arduino ve mbot projeleri geliştirmek, donanımlar üzerinde bir nevi karabüyü yapmak en büyük tutkumdur.\n',{e:0,t:5});
$('textarea').typetype('\nAyrıca kendi sticker, kıyafet ve kaplamalar gibi ürünlerimi de üretip satmayı da çok severim.\n',{e:0,t:5});
$('textarea').typetype('\nHoşlandığım şeyler arasında semi-pro olarak badminton oynamak, balık tutmak ve manga okumak var. Birde bilgisayarlarla içli dışlı olmak var...\n',{e:0,t:5});
$('textarea').typetype('\nDaha önce freelance olarak mysql, php kullanarak admin panelleri yazdım. Bir çok ulusal sempozyumun hem grafik(afiş, yaka kartı, giyim vb.) hem web tasarımclığını üstlendim. Çoklu ortam tasarımlarına uygun olarak eğitim içerikleri(animasyon ve soru görselleştirme vb.) ürettim.\n',{e:0,t:5});
$('textarea').typetype('\nHakkımda kısaca bilmeniz gereken şeylerden birisi de bilgisayarlara daha spesifik olmak gerekirse donanımlara aşık olduğumdur. Daha fazlasını bilmek isterseniz portfolioma "buradan" ulaşabilirsiniz.\n\n',{e:0,t:5});
$('textarea').typetype('\nÜzerinde çalıştığım ve bitirdiğim projeleri zamanla GitHub profilime taşıyacağım. Göz atmak isterseniz "GitHub".\n',{e:0,t:5});
$('textarea').typetype('\nBenim diğer profillerime de gidebilirsiniz.\n',{e:0,t:5});
$('textarea').typetype('\n instagram. \n Twitter.\n',{e:0,t:5,});
$('textarea').typetype('\nİş teklifleri için sıkça kontrol ettiğim "mail adresime" e-posta atabilirsiniz. \n',{e:0,t:5});
$('textarea').typetype('\nİtterasshai ^.^, Görüşmek üzere\n',{e:0,t:5});


document.getElementById('giris').scrollIntoView({ behavior: 'smooth', block: 'end' });
window.setInterval(function() {
  var elem = document.getElementById('giris');
  elem.scrollTop = elem.scrollHeight;
}, 500);


ehe.addEventListener('keydown', function(ev) {
  if (!ev) var ev = window.event;
  if (ev.keyCode !== 13) return;
  ev.preventDefault();

  var str = terminal.lastElementChild.innerHTML;
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
}, false);*/

