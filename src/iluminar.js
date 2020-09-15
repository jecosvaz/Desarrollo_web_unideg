function ini() {
    tab=document.getElementById('tabla');
    for (i=0; ele=tab.getElementsByTagName('td')[i]; i++) {
      ele.onmouseover = function() {iluminar(this,true)}
      ele.onmouseout = function() {iluminar(this,false)} 
    }
  }
  
  function iluminar(obj,valor) {
    fila = obj.parentNode;
  
      for (i=0; ele = fila.getElementsByTagName('td')[i]; i++)
        ele.style.background = (valor) ? '#DEAE09' : '';
    }