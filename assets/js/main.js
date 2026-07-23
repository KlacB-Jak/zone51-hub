(function(){
    'use strict';
    document.addEventListener('contextmenu',function(e){
        if(e.target.closest('.main-content')||e.target.closest('.arch-content')){
            e.preventDefault();
        }
    });
    console.log('[ZONE ██] System loaded. Mode: SECURE');
})();