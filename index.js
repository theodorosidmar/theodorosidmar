function write(str, el) {
  var char = str.split('').reverse();
  var typer = setInterval(function() {
    if (!char.length) return clearInterval(typer);
    var next = char.pop();
    el.innerHTML += next + (char.length == 0 ? '<span class="blink">_</span>' : '');
  }, 100);
}

write('$ about', document.getElementById('title-about'));

site = {
  initialize: function() {
    this.eventsClick();
  },
  eventsClick: function() {
    document.getElementById('about').onclick = site.modifyContent;
    document.getElementById('coding').onclick = site.modifyContent;
  },
  modifyContent: function(evt) {
    var id = evt.currentTarget.id;
    
    document.getElementById('about').classList.remove('active');
    document.getElementById('coding').classList.remove('active');

    document.getElementById('box-about').style.display = 'none';
    document.getElementById('box-coding').style.display = 'none';

    document.getElementById('title-about').innerHTML = '$';
    document.getElementById('title-coding').innerHTML = '$';

    document.getElementById(id).classList.add('active');
    
    document.getElementById('box-' + id).style.display = 'block';
    
    var title = ' ' + id;

    write(title, document.getElementById('title-' + id));
  }
};

site.initialize();
