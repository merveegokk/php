let sayi=Number(prompt("binary karşılığını görmek istediğiniz sayiyi giriniz"));
let sayi2=prompt("decimal karşılığını görmek istediğiniz ifadeyi giriniz"));

function decimaltoBinary(sayi){
let binary="";
if(sayi==0){
    return 0;
}
while(sayi>0){
    let kalan=sayi%2;
    binary=kalan+binary;//kalanı öne yazarak tersini almak zorunda kalmazsın
    sayi=parseInt(sayi/2);
}
   return binary;
}


function binarytoDecimal(sayi2){
    let tersi=sayi2.split("").reverse();
    let decimalHal=0;
    for(let i=0;i<sayi2.length;i++){
        decimalHal+=(2**i)*Number(tersi[i]);
    }
    return decimalHal;
}
