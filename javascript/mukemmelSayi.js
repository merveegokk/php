let sayi=prompt("lütfen bir sayı giriniz");
let toplam=0;
for(let i=1;i<=sayi/2;i++){
    if(sayi%i==0){
        toplam+=i;
    }
}
if(toplam==Number(sayi)){
    alert("girilen sayi mukemmeldir");
}
else{
    alert("girilen sayi mukemmel degildir");
}

