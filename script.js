(function(){
  var dlg=document.getElementById('lightbox'), big=dlg.querySelector('img'), cap=dlg.querySelector('p');
  document.querySelectorAll('.grid button').forEach(function(b){
    b.addEventListener('click',function(){
      var im=b.querySelector('img'); big.src=im.src; big.alt=im.alt; cap.textContent=b.dataset.cap;
      if(dlg.showModal) dlg.showModal();
    });
  });
  dlg.querySelector('.close').addEventListener('click',function(){dlg.close()});
  dlg.addEventListener('click',function(e){ if(e.target===dlg) dlg.close(); });
})();
