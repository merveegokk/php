const nl="\r\n";
const menu="1-Bakiye Görüntüleme"+nl+
"2-Para Çekme"+nl+
"3-Para Yatırma"+nl+
"4-Çıkıs"+nl+"Lütfen bir değer seçiniz";
let bakiye=100;
let devam=true;
let password="1234";
let passGirisHak=3;
let girilenPass;
do {
girilenPass=prompt("lutfen şifrenizi giriniz: ");
passGirisHak-=1;
alert("kalan şifre denem hakkınız:"+passGirisHak)
}while(girilenPass!=password && passGirisHak>0);
if(passGirisHak==0){
    alert("kartınız bloke olmuştur lütfen bankamız ile görüşünüz")
}
else{
while(devam){
    let secim=prompt(menu);
    switch(secim){
        
        case "1":
            alert("Bakiyeniz: "+bakiye);
            break;
        case "2":
            let cekilecekTutar=Number(prompt("çekmek istediğiniz para miktarını giriniz: "));
            if(cekilecekTutar<0){
                alert("Geçersiz değer");
            }

            else if(cekilecekTutar>bakiye){
                alert("Yetersiz Bakiye");
            }
            
            else{
                bakiye-=cekilecekTutar;
                alert("Güncel Bakiye: " +bakiye);
            }
            break;

        case "3":
            let yatirilacakTutar=Number(prompt("yatırmak istediğiniz para miktarını giriniz: "));
            if(yatirilacakTutar<0){
                alert("Geçersiz değer");
            }
            else{
            bakiye+=yatirilacakTutar;
            alert("Güncel Bakiye: " +bakiye);
            }
            
            break;
        case "4":
            alert("Ana menüye yönlendiriliyorsunuz,yine bekleriz");
            devam=false;
            break;
        default:
            alert("Lütfen geçerli bir seçim yapınız (1-4 arası).");

    }


}

}
