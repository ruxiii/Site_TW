function randInt(a,b){
    return Math.trunc(a+(b-a)*Math.random());   //Math
}
 
var tari=["Italia", "Spania", "Franta", "Germania",
"SUA", "Canada", "Brazilia", "Mexic",
"China", "Japonia", "Singapore", "Thailanda",
"Kenya", "Maroc", "Egipt", "Madagascar", "Romania",
"Argentina", "Malaezia",  
"Portugalia", "Australia", "Bali", "Austria",
"Cehia", "Norvegia", "Chile", "Peru", "Slovacia",
"Israel", "Indonezia", "Nepal",
"Taiwan",  "Palestina", "Suedia",
"Finlanda", "Danemarca", "Cuba",
"Maldive", "Cipru", "Malta",
"India", "Turcia", "Grecia",
"Croatia", "Filipine", "Qatar",
"Columbia", "Polonia"]
 
function pret_promotional(){
    var pret=[];
    pret.push(randInt(100,1000));
    return pret;
}
 
function pret_nepromotional(){
    var pret=[];
    pret.push(randInt(1000,10000));
    return pret;
}
 
function taraRandom(){
    return {
        Tari: tari[randInt(0, tari.length)].toUpperCase(), //modificare prop
        "Pret promotional (euro)": pret_promotional(),
        "Pret nepromotional (euro)": pret_nepromotional()
    };
}
 
function genereazaVacante(n){
    var vacante=[];
    for(let i=0;i<n;i++){
        var text=taraRandom()
        vacante.push(text);
    }
    return vacante;
}
 
function creeazaRand(tipCelula, vector){
    tr=document.createElement("tr");
    tr.classList.add(vector[0]);
    for(let x of vector){
        var celula=document.createElement(tipCelula);
        celula.innerHTML = x;
        tr.appendChild(celula);
    }
    return tr;
}
 
function creeazaTabel(vacante){
    if(!vacante || vacante.length==0) return;
   
    var tabel=document.createElement("table");
    tabel.id="tab";
    var thead=document.createElement("thead");
    tabel.appendChild(thead) 
    var rand=creeazaRand("th",Object.keys(vacante[0]));
    thead.appendChild(rand);
       
   
    var tbody=document.createElement("tbody");
    tabel.appendChild(tbody);
    for(let v of vacante){ 
        rand=creeazaRand("td",Object.values(v));
        tbody.appendChild(rand);
 
    }
    return tabel;
}
 
const myTime=setInterval(Hei, 3000)  //setInterval
 
function Hei(){
    document.getElementById("p1").innerHTML="Nu rata ofertele noastre last-minute!"
}
 
function colorare(culoare,ob){
        ob.style.color=culoare;
    }
 
window.onload=function(){
    var titlu=document.getElementsByClassName("c1");
    for(let t of titlu){
            t.style.color="purple"; //modificarea stilului unui element
    }
    var v=genereazaVacante(10)
    document.getElementById("Tabel").appendChild(creeazaTabel(v)) //creare element
 
    document.getElementById("buton1").onclick=function(e){ //folosire+modificare ev mouse
        var linii=document.getElementsByTagName("tr")
        var maxim=-1;
        var pozitie=-1;
        for(let i=1;i<linii.length;i++){
            var numar=linii[i].childNodes[2].innerHTML
            if(parseInt(numar)>maxim){
                maxim=parseInt(numar)
                pozitie=i;
            }
        }
        localStorage.setItem("tara_stearsa", linii[pozitie].innerHTML)  //localStorage
        linii[pozitie].parentNode.removeChild(linii[pozitie])   //stergere element
        var text=""
        for(let i=4;i<localStorage.getItem("tara_stearsa", linii[pozitie].innerHTML).length;i++)
            if(localStorage.getItem("tara_stearsa", linii[pozitie].innerHTML)[i]!="<"){
                text+=localStorage.getItem("tara_stearsa", linii[pozitie].innerHTML)[i]
            }
            else{
                break;
            }
        alert("Sigur doresti sa stergi: "+text+'\n'+ "event target: "+e.target.id)  //target
    }
 
    document.getElementById("buton2").onclick=function(e){
        var linii=document.getElementsByTagName("tr")
        var numar=randInt(1,linii.length)
        for(let i=1;i<linii.length;i++){
            if(i==numar){
                linii[i].style.background="pink";   //schimbare aleatoare
                linii[i].style.fontWeight="bold";
                break
            }
        }
        alert("Sigur doresti sa selectezi?"+'\n'+ "Event currentTarget: "+e.currentTarget.id + '\n' //currentTarget
        +"Caracteristici dupa apasarea butonului: " + window.getComputedStyle(linii[numar]).getPropertyValue("background")) //getComputedStyle
    }
 
    document.getElementById("buton3").onclick=function(e){
        if(e.ctrlKey){  //folosire+modificare ev tastatura
            var linii=document.getElementsByTagName("tr")
            for(let i=1;i<linii.length;i++){
                if(i%2==0){
                    linii[i].classList.add("selectat"); //classList
                    linii[i].style.color="blue"
                }
            }
        }
        else if(e.shiftKey){
            var linii=document.getElementsByTagName("tr")
            for(let i=1;i<linii.length;i++){
                linii[i].style.fontWeight="900";
            }
        }
    }
 
    var pl=document.getElementsByTagName("button");
    for(var i=0;i<pl.length;i++){
        setTimeout(colorare,3500*(i+1),"red",pl[i]);    //setTimeout
    }
}




		