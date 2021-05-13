
function addText (val:number){
    (document.getElementById('numberfield')as HTMLInputElement).value +=val;
}

function calculate() {
    let output:string= (document.getElementById('numberfield')as HTMLInputElement).value;
    if(output!=''){
        hist(output);
        (document.getElementById('numberfield')as HTMLInputElement).value='';
    }

}
function hist(hist:string){
    (document.getElementById('history') as HTMLSelectElement).innerHTML += ("<label for=''>" + hist+"="+ eval(hist)+"</option><br>");
}