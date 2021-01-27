'use strict';

{

    const open = document.getElementById('open');
    const overlay = document.querySelector('.overlay');
    const close = document.getElementById('close');

    // openがクリックされたらの処理
    open.addEventListener('click', () => {
        overlay.classList.add('show');
        open.classList.add('hide');
    });

    // closeがクリックされたらの処理
    close.addEventListener('click', () => {
        overlay.classList.remove('show');
        open.classList.remove('hide');
    });



}