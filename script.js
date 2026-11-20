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

/* light / dark theme toggle */
(function(){
  var root=document.documentElement, btn=document.querySelector('.theme-toggle');
  if(!btn) return;
  var mq=window.matchMedia('(prefers-color-scheme: dark)');
  function current(){ return root.getAttribute('data-theme') || (mq.matches ? 'dark' : 'light'); }
  function updateLabel(){
    var text='Switch to '+(current()==='dark' ? 'light' : 'dark')+' mode';
    btn.setAttribute('aria-label',text); btn.title=text;
  }
  btn.addEventListener('click',function(){
    var next=current()==='dark' ? 'light' : 'dark';
    root.setAttribute('data-theme',next);
    try{ localStorage.setItem('theme',next); }catch(e){}
    updateLabel();
  });
  if(mq.addEventListener) mq.addEventListener('change',updateLabel);
  else if(mq.addListener) mq.addListener(updateLabel);
  updateLabel();
})();
