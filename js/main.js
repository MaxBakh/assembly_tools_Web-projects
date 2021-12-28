import {
    printErr,
    printRes
} from './printRes.js';
import getDataDiff from './getDataDiff.js';
//импорт функцкии переключения
import swipper from './swipper.js';
import tikTac from './timer.js'
const form = document.getElementById('datecalc'),
    buttonRun = document.getElementById("button"), // 
    swip = document.getElementById('swip'); // 

//переключатель
swip.onclick = swipper;




form.onsubmit = (e) => {
    e.preventDefault();

    const dataForm = new FormData(e.target);

    const firstDate = dataForm.get('firstDate');
    const secondDate = dataForm.get('secondDate');

    if (!firstDate || !secondDate) {
        printErr('Error!!! Enter data');
    } else {
        const dataRes = getDataDiff(firstDate, secondDate);
        printRes(dataRes);
    }
    console.log(firstDate, secondDate);
}




///////////////////////////////////////////


buttonRun.addEventListener('click', tikTac);