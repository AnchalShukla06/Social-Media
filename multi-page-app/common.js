console.log('hello');
console.log('document.body',document.body);
let i = Number(localStorage.getItem('i')) || 0;
renderI(i);

function renderI(i){
    document.getElementById('i_para').innerHTML = i;
}
function IncrementI(){
    i+=1;
    console.log(i);
    renderI(i);
    localStorage.setItem('i',i);
}