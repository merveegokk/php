//! js dosyasını body bitisinin ustune script etiketi icinde tanimla;<script src="not1.js"></script> 
/* console.log(window);
alert("bu site bakım aşamasında");  */
/* yorum satırları renkleri:
    TODO: turuncu yapar
     ? mavi yapar
     ! ünlem kırmızı yapar
     *soluk yeşil yapar
     normal hali yeşil*/

/* Degişken tanımlamak için :
    ! var,let,const anahtar kelimeleri
    const:Değeri değişmeyecek şeyler için.API Linkleri, Veritabanı şifreleri,
    let: değişkenlerde
    var kullanma */

/*  == ve === operatörlerinin farkı
    5=="5" ifadesi True döner çünkü sadece içeriklerini karşılaştırır
    5==="5" ifadesi False döner çünkü hem içerikleri hem veri tiplerini karşılaştırı */
/* Diyalog Kutuları:alert(),prompt(),confirm()*/
//! const nl="\r\n"; //new line  

/* Tip Dönüşümleri:Number(),parseInt(),parseFloat(),String(),toString(); 
let a=parseInt("12");
let b=parseFloat("34.9");
let c=(55).toString();
let d=String(22);*/

/* debugger; hata ayıklama için kod içine yaz */
// ! ForEach döngüsü dizilerde kullanılır 
/* charAt() metodu string ifadenin karakterlerini tek tek yazdırır
let sayi=prompt("lütfen armstrong olup olmadığını kontrol etmek istediğiniz sayiyi giriniz:");
let basamaktoplam=0;
for(let i=0;i<sayi.length;i++){
    let rakam=Number(sayi.charAt(i));//prompt sting alır charat stinglerde çalışır basamakları numbera çeviririz
    basamaktoplam+=rakam**sayi.length;  
}
} */

/* 
!forEach() döngüsü;
let isimler=["ayşe","mehmet","ali","sefa"];
isimler.forEach(function(isim){
    console.log(isim);
})*/
/* 
? Dizi metotları
push():adds a new element to an array (at the end)

unshift():adds a new element to an array (at the beginning)

pop():removes the last element

shift():method removes the first array element

splice(index,index):method can be used to add new items to an array
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");--->Banana,Orange,Lemon,Kiwi,Apple,Mango
The first parameter (2) defines the position where new elements should be added (spliced in).
The second parameter (0) defines how many elements should be removed.
The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.
fruits.splice(0, 1); dersen de 0 indeksinden 1 eleman sil demek
toSpliced() metodu daha güvenli hem old arrayi hem new arrayi tutar
toString():

join:diziyi stringe çevirir.farkı araya eleman eklenir

concat():const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];
const myChildren = myGirls.concat(myBoys);

slice:diziyi istediğin yerden bölüp yeni dizi oluşturur

length=>const fruits = ["Banana", "Orange", "Apple", "Mango"];
let size = fruits.length;//The length property can also be used to set the length of an array:fruits.length = 2;
provides an easy way to append a new element to an array:
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[fruits.length] = "Kiwi";

at()=>const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits[2]; ile let fruit = fruits.at(2); aynı işi görür
at metotunun avantajı -1 diye girersen tersten de ulaşabilirsin*/

/* string metotları
charAt(),concat(),indexof(),lastindexof(),toUpperCase(),toLowerCase(),
trim(),slice(),substring(),replace(),split(),valueof(),startsWith(),endsWith() */

/* math sınıfı metotları:floor,ceil,round,min,max,random,abs,sqrt,pow,pi*/

/* tarih metodu 
let tarih=new Date();
console.log(tarih.getDate()); get...ile alınıyor
yeni değer vermek için de set kullanılıyor 
tarih.setHours(15) gibi */

