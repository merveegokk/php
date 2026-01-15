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

/* ********************************************************************************************************* */
/*
!DOM MANİPULASYONU 
 Düğümler Arasında Gezinme
parentNode
childNodes[nodenumber]
firstChild
lastChild
nextSibling
previousSibling
DOM işlemede sık yapılan bir hata, bir öğe düğümünün metin içermesini beklemektir.
mesela p etiketi arasındaki metin için p etiketi ayrı düğüm içindeki meyin ayrı düğümde tutulur
Metin düğümünün değerine, düğümün özelliği aracılığıyla erişilebilir innerHTML
<title id="demo">DOM Tutorial</title>
myTitle = document.getElementById("demo").innerHTML;
----------------------
1.Elemanları Seçme (Selecting)
Bir şeyi değiştirmeden önce onu bulman gerekir.
document.querySelector(): CSS seçici mantığıyla çalışır. Tek bir eleman döndürür.
document.querySelectorAll(): Aynı sınıfa sahip tüm elemanları bir liste (NodeList) olarak döndürür.
Hangi Durumda Hangisi?
Input alanını veya "Ekle" butonunu seçmek için: querySelector('#input-id')
Tüm liste elemanlarını topluca silmek veya işaretlemek için: querySelectorAll('.item')

value=getElementById("btn"); ya da value=btn.getAttribute("id");
const classListesi=btn.classList[3];

calssListesi.forEach(function(i)){
        console.log(i);
}

sayfaya metin eklemek için 2 yöntem var=>innerHtml ve textContent

let butonText=button.textContent;//sadece texti alır
let butonText2=button.innerHtml;//hem texti hem de yanındaki html etiketini de alır mesela <b>b etiketi gibi</b>

tag name demek etiketin ismi demek
const forms=document.getElementsByTagName("form");
!getElementsById-getElementByClassName-getElementByTagName kullanmak yerine 
querySelector kullanabilirsin. bunun kullanımıda içine css etiketlerini vererek oluyor 
yani #btn dersen id verirsin .btn dersen class verirsin 
const todoList=document.querySelectorAll("li:nth-child(2)");

ör;const todoList=document.querySelectorAll("li:nth-child(odd)");//tekleri seçer even dersen çiftleri seçer
/todoList forEach(function(i){
   i.style.backgroundColor="lightgrey";//tek sayı olanların arkası açık gri oldu
})
---------------------------------------------------------
!style konusu: tüm style etiketleri html dom style w3 de var
değişkenininİsmi.style.stilElementi=deger;
ör; 
const todo=document.querySelectorAll(".list-group-item")[0];
todo.style.color="red";

--------------------------------------------------------
2. Eleman Oluşturma ve Ekleme (Creating & Appending)
document.createElement('tag'): Bellekte yeni bir HTML etiketi oluşturur.
appendChild() veya append(): Oluşturduğun elemanı sayfadaki bir ebeveynin içine yerleştirir.
ör;
const yeniLi = document.createElement('li'); // <li></li> oluşturuldu
yeniLi.textContent = 'Ekmek al'; // İçine yazı yazıldı
liste.appendChild(yeniLi); // <ul> içine eklendi

const link=document.creatElement("a");//a elementi oluşturdu link adı
link.id="goBlogSite";//a etiketine id verdi
link.className="btn btn-dark btn-sm";//a elementine class ismi verdi
link.href="http://....";
link.target="_blank";
link.textContent="websiteye gitmek için tıklayınız";
ya da 
link.innerHtml="websiteye gitmek için tıklayınız";//ama bu güvenli değil textContenti kullan 
document.body.appendChild(link);
---------------------------------------------------------
3. İçerik ve Stil Değiştirme (Modifying)
Elemanın içindeki yazıyı değiştirmek veya tamamlanan görevin üstünü çizmek için kullanılır.
textContent: Sadece metin eklemek için en güvenli yoldur.
innerHTML: HTML etiketleriyle birlikte içerik eklemek için kullanılır (dikkatli olunmalı, güvenlik açığı yaratabilir).
classList.add() / .remove() / .toggle(): CSS sınıflarını yönetir. To-Do'da "tamamlandı" efekti için .done sınıfını ekleyip çıkarmak için birebirdir.

replaceChild() metodu:
const newnode=document.createTextNode("water");
const element=document.getElementById("mylist").chidren[0];
element.replaceChild(newNode,element.childNodes[0]);
yeni elementle eskiyi değiştirdik öncekinde çay yazıyordu şimdi su yazdık mesela
---------------------------------------------------------
4. Olay İzleyiciler (Event Listeners)[Event objesi diye bir şey var,geri döndürüyor]
Kullanıcı bir şeye tıkladığında veya bir tuşa bastığında ne olacağını belirler.
en yaygın eventsler:
onchange,onclick,onmouseover,onmouseout,onkeydown,onload
input events:
onblur,onchange,onfocus,onselect,onsubmit,onreset,onkeydown,onkeypress,onkeyup,onkeypress vs onkeyup
aynı şekilde mouse eventları,click eventları,load eventları diye eventlar var kullanacağın zaman araştır

js sayfasına git fonksiyonu tanımla
function changeTitle(){
    document.querySelectAll(".card-title")[1].textContent="başlık değişti"
}
yöntem1:
btn(elementinclassismi).addEventListener('click', changeTitle(functionismi)): 
En yaygın kullanım.changeTitle yazdıktan sonra parantez() koyma çünkü tetiklenmeden çalışır bu sefer
submit: Form gönderildiğinde (Enter'a basıldığında veya butona tıklandığında) çalışır.

yöntem2:
eventleri kullanırken html içinde uzun uzun event tanımlamak yerine tetikleme kullan
<a href="#" onclick="changeTitle()">link</a>
----------------------------
key event
inputun içine değer girildiğinde onu yakalamak için 
e.target.value
e (veya event): Olayın kendisini temsil eden objedir (Tuşa basılması, tıklama vs.).

target: Bu olayın hangi eleman üzerinde gerçekleştiğini söyler (Hangi inputa yazıyorsun?).

value: O elemanın o anki değeridir (İçinde ne yazıyor?).
1. input Event (Anlık Takip)
Kullanıcı klavyede her bir harfe bastığında, hatta sağ tıkla yapıştırdığında bile çalışır. En çok bu kullanılır.

const input = document.querySelector("#myInput");
input.addEventListener("input", function(e) {
    console.log("Şu an yazılan:", e.target.value);
});

2. change Event (Odak Kaybolunca)
Kullanıcı yazmayı bitirip mouse ile dışarı tıkladığında veya Entera bastığında (inputtan odak çıktığında) bir kez çalışır.

Alternatif: e.target Kullanmadan Almak
Eğer bir event listener içindeyken o anki elemente başka bir yolla ulaşmak istersen şunları da görebilirsin:

this.value: Eğer normal bir fonksiyon (function()) kullanıyorsan this kelimesi o inputu temsil eder. (Ok fonksiyonlarında -arrow function- this çalışmaz!)

Direkt Element Üzerinden: inputElement.value şeklinde de her zaman ulaşabilirsin.

Küçük Bir İpucu
Eğer bir sayı inputu (type="number") kullanıyorsan, e.target.value sana her zaman "string" (metin) döner. Eğer onunla matematiksel bir işlem yapacaksan Number(e.target.value) diyerek sayıya çevirmeyi unutma!

---------------------------------------------------------
5. Eleman Silme ve Ebeveyne-Çocuğa Ulaşma (Traversing)
Bir görevin yanındaki "Sil" butonuna basıldığında, o butonun içinde bulunduğu <li> etiketini silmen gerekir.
parentElement: Seçili elemanın bir üstündeki kutuya gider.
children:Seçili elemanın bir altındaki kutuya gider
nextElementSibling,previousElementSibling
remove(): Elemanı tamamen ortadan kaldırır.ör;todos[0].remove();
örneğin bir parentin son çocuğunun textini değiştirmek için;
value=todolist.children[todolist.children.length-1].textContent="onaylandı"
!çocuklar bir dizide tutulmaz onu sen dizye atıp ForEach ile dönersin.
value=Array.from(todolist.children);
value.forEach(function(i){
    console.log(i.textContent);
})
---------------------------
HTML'deki input'u JS'ye tanıtmak	querySelector()
Yeni bir görev satırı oluşturmak	createElement()
Görevin üstünü çizmek (CSS ile)	    classList.toggle('completed')
Sil butonuna basınca satırı uçurmak	element.remove()
Sayfanın yenilenmesini engellemek	event.preventDefault()

*/
/* 
window document objesi içinde bir çok özellik var;host,hostname,href,pathname,port... 

let value;
console.log(document.location);
value=document.location.href; diyebilirsin 
value=document.location.host;diyebilirsin. host adreslerine işlem yaptırabilirsin sonra
value=document.title;
value=document.links.item(4).id;
value=document.links.item(4).getAttribute("id");
value=document.links.item(4).getAttribute("class");
value=document.links.item(4).getAttribute.classList[3];
value=document.forms;
value=document.forms.item(1).name;
*****************************************************************
sessionStorage:kalıcı değildir.oturumu sonlandırdığında silinir

sessionStorage.setItem("350","abc");//şeklinde key-value girilir.

sessionStorage.removeItem("350");//silmek istediğin elemanın key değeri gir

sessionStorage.getItem("350");//keyi 350 olan değeri getir

JSON is used to send, receive and store data.

JSON and JavaScript

JavaScript has a built in function for converting JSON strings into JavaScript objects:

JSON.parse()
Array'i Geri Almak için
const veri = sessionStorage.getItem("gunlukPlan");
Metni tekrar array formuna çeviriyoruz
const planlarArray = JSON.parse(veri);

console.log(planlarArray[0]); // Çıktı: "Kitap oku"
planlarArray.push("Yeni görev"); // Artık gerçek bir array gibi davranır!

JavaScript also has a built in function for converting an object into a JSON string:

JSON.stringify()
sessionStorage ve localStorage sadece string (metin) saklayabildiği için, bir array'i (diziyi) oraya düzgünce kaydetmenin tek yolu JSON.stringify() kullanmaktır.

const planlar = ["Kitap oku", "Egzersiz yap", "Kod yaz"];

Array'i JSON formatında bir metne dönüştürüp kaydediyoruz
sessionStorage.setItem("gunlukPlan", JSON.stringify(planlar));

localStorage içinde session yerine local yaz gerisi aynı






























*/