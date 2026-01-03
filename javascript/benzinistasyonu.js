const nl="\r\n";//new line 
let dizel=24.53, benzin=22.25,lpg=11.1;
const secenekler="1-dizel"+nl+"2-benzin"+nl+"3-Lpg"+nl+"Yakıt turunuzu seciniz";
let yakitTipi=Number(prompt(secenekler));
let yakitLitresi=Number(prompt("kac litre yakıt alıcaksınız?" ));

let tutar=0;
if(yakitTipi==1){
    tutar=dizel*yakitLitresi;
}
else if(yakitTipi==2){
    tutar=benzin*yakitLitresi;

}
else{
    tutar=lpg*yakitLitresi;
}
alert("toplam tutar "+tutar);

