const nl="\r\n";
let i,j;

alert("çarpmak istediğiniz sayıları giriniz.");
let a=Number(prompt("birinci sayiyi giriniz"));
let b=Number(prompt("ikinci sayiyi giriniz"));

function carpma(a,b){
    alert("axb= "+(a*b));
}
carpma(a,b);

function carpimtablosu(){
    let kutu=document.getElementById("tabloKutusu");
    let tumTablo="";
    for(i=1;i<=10;i++){
        tumTablo+='<div class="kart">';
        tumTablo+='<span class="baslik">' + i + '</span>';
        for(j=1;j<=10;j++){
            tumTablo += i + " x " + j + " = " + (i * j) + "<br>";
        }
        tumTablo+='</div>';
               
    }
    kutu.innerHTML=tumTablo ;
}

carpimtablosu();





