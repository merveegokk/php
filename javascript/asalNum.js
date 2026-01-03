let sayi=Number(prompt("Asal olup olmadığını öğrenmek istediğiniz sayiyi giriniz"));
let asalMi=true;
let i;
if(sayi<2){
    asalMi=false;
}
else{
    for(i=2;i<=(sayi/2);i++){
        if(sayi%i==0){
            asalMi=false;
            break;
        }

    }
}

if(asalMi==true){
    alert("Girdiğiniz " + sayi + " sayısı asaldır.");
}else {
    alert("Girdiğiniz " + sayi + " sayısı asal değildir.");
}

