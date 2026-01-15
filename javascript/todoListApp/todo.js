//html elementlerini seçme
const addText=document.querySelector('#addText');
const addBtn=document.querySelector("#addBtn");
const doList=document.querySelector("#doList");
const doneList=document.querySelector("#doneList");

addBtn.addEventListener("click",btnBas);
addText.addEventListener("keypress",enterBasildi);

function btnBas(){
    const gorevText=addText.value;
    const ekleGorev=document.createElement("li");
    if(gorevText===""){
        alert("Görev Girmediniz");
        return;
    }
    else{ 
        ekleGorev.innerHTML=`
        <div class="gorevSol">
        <input type="checkbox" class="durum"/>
        <span>${gorevText}</span></div>
        <button class="btnSil">x</button>
        `;
         
    }
    doList.appendChild(ekleGorev);
    addText.value="";//yeni görev girildikten sonra kutuyu temizlemek için
    localStorageKaydet();
}
function enterBasildi(e){
    if(e.key==="Enter"){
        btnBas();
    }
}
doList.addEventListener("change",checkAtildi);
function checkAtildi(e){
    if(e.target.classList.contains("durum")){
        const bitenGorev=e.target.parentElement.parentElement;
        doneList.appendChild(bitenGorev);
        bitenGorev.classList.add("durumFinish");
        localStorageKaydet();
    }

}
doneList.addEventListener("change",checkSilindi);

function checkSilindi(e){
    if(e.target.classList.contains("durum")){
        const bitmeyenGorev=e.target.parentElement.parentElement;
        doList.appendChild(bitmeyenGorev);
        bitmeyenGorev.classList.remove("durumFinish");
        localStorageKaydet();
    }
}
doList.addEventListener("click",gorevSil);
doneList.addEventListener("click",gorevSil);

function gorevSil(e){
    if(e.target.classList.contains("btnSil")){
        const silinecekLi=e.target.parentElement;
        silinecekLi.remove();
        localStorageKaydet();
    }

}
//verileri localstorage kaydetme
function localStorageKaydet(){
    let yapilacaklarListesi=[];
    let bitenlerListesi=[];
    doList.querySelectorAll("li span").forEach(function(i){
        yapilacaklarListesi.push(i.textContent);
    });
    doneList.querySelectorAll("li span").forEach(function(i){
        bitenlerListesi.push(i.textContent);
    }
)
    localStorage.setItem("yapilacaklar",JSON.stringify(yapilacaklarListesi));
    localStorage.setItem("bitenler",JSON.stringify(bitenlerListesi));
}

//sayfa açıldığında verileri geri getirme

function verileriLocaldenGetir(){
    let yapilacaklar=JSON.parse(localStorage.getItem("yapilacaklar"))||[];
    yapilacaklar.forEach(function(i){
        elemanOlustur(i,doList,false);
    });
    let bitenler=JSON.parse(localStorage.getItem("bitenler"))||[];
    bitenler.forEach(function(i){
        elemanOlustur(i,doneList,true);
    });

}

function elemanOlustur(gorev,liste,bitmisMi){
    const ekleGorev=document.createElement("li");
    if(bitmisMi){
        ekleGorev.classList.add("durumFinish");
    }

    ekleGorev.innerHTML=`
    <div class="gorevSol">
    <input type="checkbox" class="durum" ${bitmisMi ?'checked':''}/>
    <span>${gorev}</span>
    </div>
    <button class="btnSil">x</button>
    `;
    liste.appendChild(ekleGorev);
}

document.addEventListener("DOMContentLoaded",verileriLocaldenGetir);








