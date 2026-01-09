let sayi=prompt("lütfen armstrong olup olmadığını kontrol etmek istediğiniz sayiyi giriniz:");
armstrongmu=false;
let basamaktoplam=0;
for(let i=0;i<sayi.length;i++){
    let rakam=Number(sayi.charAt(i));
    basamaktoplam+=rakam**sayi.length;  
}
if(basamaktoplam==Number(sayi)){
    armstrongmu=true;
}
if(armstrongmu){
    alert("sayiniz armstrong");

}else{
    alert("sayiniz armstrong degil");
}

